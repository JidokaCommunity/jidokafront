import Homepage from './components/Homepage';
import { getMembers, Member } from './services/api';
import { sortMembers } from './services/members';

export default async function Home() {
  let members: Member[] = [];

  try {
    const data = await getMembers();
    if (Array.isArray(data)) {
      members = sortMembers(data);
    }
  } catch (error) {
    console.error("Failed to load members", error);
  }

  return (
    <Homepage members={members} />
  );
}
