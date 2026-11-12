import { Member } from "./api";

/**
 * Returns the route parameter for a member based on their ID.
 * 
 * @param member - The member object containing id.
 * @returns The member ID as a string.
 */
export function getMemberSlug(member: Pick<Member, "id">): string {
  return String(member.id);
}

export function getMemberIdFromSlug(slug: string): string {
  return slug;
}
