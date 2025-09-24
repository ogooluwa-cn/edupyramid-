declare module 'world-countries' {
  const countries: Array<{
    name: {
      common: string;
      official: string;
      native: Record<string, { common: string; official: string }>;
    };
    cca2: string;
    cca3: string;
    ccn3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies?: Record<string, { name: string; symbol: string }>;
    idd: { root: string; suffixes: string[] };
    capital?: string[];
    altSpellings: string[];
    region: string;
    subregion?: string;
    languages?: Record<string, string>;
    translations: Record<string, { official: string; common: string }>;
    latlng: [number, number];
    demonym?: string;
    landlocked: boolean;
    borders?: string[];
    area: number;
    flag: string;
    flags: { png: string; svg: string };
  }>;
  export default countries;
}
