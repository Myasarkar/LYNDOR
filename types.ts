
export interface Service {
  id: string;
  name: string;
  category: 'Anti-Aging' | 'Bölgesel İncelme' | 'Cilt Protokolleri' | 'Kalıcı Makyaj' | 'Lazer Epilasyon' | 'Kaş & Kirpik' | 'Saç Bakımı';
  image: string;
  description: string;
}

export interface NavItem {
  label: string;
  path: string;
}
