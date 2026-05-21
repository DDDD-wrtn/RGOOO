export interface Stat {
  id: string;
  name: string;
  emoji: string;
  description?: string;
}

export interface Faction {
  id: string;
  name: string;
  emoji: string;
  leaderType: string;
  description: string;
}

export interface Companion {
  id: string;
  name: string;
  gender: string;
  role: string;
  tier: string;
  stats: string;
  specialty: string;
  habit: string;
  imageUrl?: string;
}

export interface Bandit {
  region: string;
  name: string;
  description: string;
}

export interface NPC {
  name: string;
  title: string;
  gender: string;
  traits: string;
  description: string;
  stats?: string;
  imageUrl?: string;
}

export interface Family {
  name: string;
  role: string;
  members: string[];
}

export interface RegionGeography {
  faction: string;
  capital: string;
  fortresses: string[];
  villages: string[];
  imageUrl?: string;
}
