import { Member } from "./api";

export const mockMembers: Member[] = [
  {
    id: "1",
    name: "Juan Carlos Maldonado Beltran",
    role: "FOUNDER",
    linkedinURL: "https://www.linkedin.com/in/juan-carlos-maldonado-beltran-a87a5054/",
    avatar: "https://ui-avatars.com/api/?name=Juan+Carlos+Maldonado+Beltran&background=random",
  },
  {
    id: "2",
    name: "Luz Karine Florez daza",
    role: "FOUNDER",
    linkedinURL: "https://www.linkedin.com/in/karineflorez/",
    avatar: "https://ui-avatars.com/api/?name=Luz+Karine+Florez+daza&background=random",
  },
  {
    id: "3",
    name: "Daniel Cardenas Parra",
    role: "Senpai",
    linkedinURL: "https://www.linkedin.com/in/daniel-cardenas-88545a181/?locale=es",
    githubUrl: "https://github.com/borosdemir",
    avatar: "https://ui-avatars.com/api/?name=Daniel+Cardenas+Parra&background=random",
  },
  {
    id: "4",
    name: "Ruben Moreno Guerra",
    role: "Trainee",
    linkedinURL: "https://www.linkedin.com/in/ruben-dario-moreno-guerra-720b8b103",
    avatar: "https://ui-avatars.com/api/?name=Ruben+Moreno+Guerra&background=random",
  },
  {
    id: "5",
    name: "Alfonso Daniel Sanchez Lemus",
    role: "TRAINEE",
    linkedinURL: "https://www.linkedin.com/in/alfonso-daniel-sánchez-lemus-92a24130b",
    avatar: "https://ui-avatars.com/api/?name=Alfonso+Daniel+Sanchez+Lemus&background=random",
  },
  {
    id: "6",
    name: "Claribel Suarez Muñoz",
    role: "Trainee",
    linkedinURL: "https://www.linkedin.com/in/claribel-su%C3%A1rez-mu%C3%B1oz-15773169/",
    avatar: "https://ui-avatars.com/api/?name=Claribel+Suarez+Mu%C3%B1oz&background=random",
  },
  {
    id: "7",
    name: "Fabian",
    role: "Trainee",
    linkedinURL: "mailto:feng.suarezfj@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Fabian&background=random",
  },
  {
    id: "8",
    name: "Jhonatan Hurtado",
    role: "Trainee",
    linkedinURL: "mailto:jonafabian12@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Jhonatan+Hurtado&background=random",
  },
  {
    id: "9",
    name: "Ashmed Diaz",
    role: "Senpai",
    linkedinURL: "mailto:ashmeddiaz5@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Ashmed+Diaz&background=random",
  },
  {
    id: "10",
    name: "Stiven Valencia",
    role: "Senpai",
    linkedinURL: "mailto:s.valenciar0@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Stiven+Valencia&background=random",
  },
];

export const roleOrder: Record<string, number> = {
  FOUNDER: 1,
  SENSEI: 2,
  SENPAI: 3,
  TRAINEE: 4,
};

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

export function findMemberById(id: string): Member | undefined {
  return mockMembers.find((member) => member.id === id);
}
