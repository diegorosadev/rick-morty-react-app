export type Character = {
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
    status: string;
    location: {
      name: string;
      url: string;
    };
    origin: {
      name: string;
      url: string;
    };
  };
  