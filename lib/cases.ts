import fs from 'fs';
import path from 'path';

const casesDirectory = path.join(process.cwd(), 'content/cases');
const publicCasesDirectory = path.join(process.cwd(), 'public/cases');

export interface StackItem {
  label: string;
  value: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string | null;
  imageAlt: string | null;
}

export interface Screenshot {
  src: string;
  alt: string;
}

export interface CaseData {
  slug: string;
  title: string;
  type: string;
  excerpt: string;
  date: string;
  coverImage: string;
  challenge: string;
  features: Feature[];
  screenshots: Screenshot[];
  stack: {
    backend: StackItem[];
    frontend: StackItem[];
  };
  technologies: string[];
}

export function getCaseSlugs(): string[] {
  if (!fs.existsSync(casesDirectory)) return [];
  return fs.readdirSync(casesDirectory).filter((file) =>
    fs.statSync(path.join(casesDirectory, file)).isDirectory()
  );
}

function copyAssetsToPublic(slug: string) {
  const sourceDir = path.join(casesDirectory, slug);
  const destDir = path.join(publicCasesDirectory, slug);
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.readdirSync(sourceDir).forEach((file) => {
    if (!file.endsWith('.json') && !file.endsWith('.md')) {
      const src = path.join(sourceDir, file);
      // Ignora subdiretórios — copyFileSync só suporta arquivos
      if (!fs.statSync(src).isFile()) return;
      const dest = path.join(destDir, file);
      if (!fs.existsSync(dest) || fs.statSync(src).mtime > fs.statSync(dest).mtime) {
        fs.copyFileSync(src, dest);
      }
    }
  });
}

export function getCaseBySlug(slug: string): CaseData {
  const jsonPath = path.join(casesDirectory, slug, 'content.json');
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`Case not found: ${slug}`);
  }
  const raw = fs.readFileSync(jsonPath, 'utf8');
  const data = JSON.parse(raw);
  copyAssetsToPublic(slug);
  return { slug, ...data };
}

export function getAllCases(): Omit<CaseData, 'challenge' | 'features' | 'screenshots' | 'stack'>[] {
  return getCaseSlugs()
    .map((slug) => {
      const { challenge, features, screenshots, stack, ...meta } = getCaseBySlug(slug);
      return meta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
