import Members from '../components/Members';
import { getMembers, Member } from '../services/api';
import { sortMembers } from '../services/members';

/**
 * Members Page
 * 
 * Fetches the members list on the server and renders the main members page.
 */
export default async function MembersPage() {
  let members: Member[] = [];
  let error: string | null = null;

  try {
    const data = await getMembers();
    if (Array.isArray(data)) {
      members = sortMembers(data);
    } else {
      error = "Invalid data format";
    }
  } catch {
    error = "Failed to load members";
  }

  return <Members members={members} error={error} />;
}
