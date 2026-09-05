import { Member } from "./api";

/**
 * Order of importance for different member roles.
 * Used for sorting members.
 */
export const roleOrder: Record<string, number> = {
  FOUNDER: 1,
  SENSEI: 2,
  SENPAI: 3,
  TRAINEE: 4,
};

/**
 * Sorts a list of members by their role weight and then alphabetically by name.
 * 
 * @param membersList - The list of members to sort.
 * @returns A new sorted array of members.
 */
export function sortMembers(membersList: Member[]): Member[] {
  return [...membersList].sort((a, b) => {
    const roleA = a.role.toUpperCase();
    const roleB = b.role.toUpperCase();

    const weightA = roleOrder[roleA] || 99;
    const weightB = roleOrder[roleB] || 99;

    if (weightA !== weightB) {
      return weightA - weightB;
    }

    return a.name.localeCompare(b.name);
  });
}
