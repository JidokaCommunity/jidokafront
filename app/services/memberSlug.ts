import { Member } from "./api";

/**
 * Converts a string into a URL-friendly slug.
 * 
 * @param text - The string to slugify.
 * @returns The slugified string.
 */
function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Generates a unique slug for a member based on their ID and name.
 * 
 * @param member - The member object containing id and name.
 * @returns The generated slug.
 */
export function getMemberSlug(member: Pick<Member, "id" | "name">): string {
  return `${member.id}-${slugify(member.name)}`;
}

export function getMemberIdFromSlug(slug: string): string {
  return slug.split("-")[0];
}
