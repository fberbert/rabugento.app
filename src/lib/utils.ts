import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  // merge tailwind classes and remove duplicate class names
  const merged = twMerge(clsx(inputs));
  const parts = merged.split(/\s+/).filter(Boolean);
  const unique = Array.from(new Set(parts));
  return unique.join(' ');
}
