import { Member } from "./api";

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getMemberSlug(member: Pick<Member, "id" | "name">): string {
  return `${member.id}-${slugify(member.name)}`;
}

export function getMemberIdFromSlug(slug: string): string {
  return slug.split("-")[0];
}
