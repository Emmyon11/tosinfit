interface LoginReq extends NextApiRes {
  body: {
    name: string;
    email: string;
    password: string;
  };
}

type Review =
  | {
      id: string;
      name: string;
      body: string;
    }
  | undefined
  | null;

type Data = {
  name: string;
  email: string;
  role: string;
  hashedPassword: string;
};

type RegisterInput = {
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
};

type ProfileInput = {
  age: string;
  weight: string;
  height: string;
  goal: 'LOSEWEIGHT' | 'GETJACKED' | 'GETRIPPED' | 'STAYFIT';
};

interface ProfileData extends ProfileInput {
  userId: string;
}

type LoginInput = {
  email: string;
  password: string;
};

enum goalEnum {
  LOSEWEIGHT = 'LOSEWEIGHT',
  GETJACKED = 'GETJACKED',
  GETRIPPED = 'GETRIPPED',
  STAYFIT = 'STAYFIT',
}

type User =
  | ({
      profile: {
        id: string;
        weight: string | null;
        age: string | null;
        height: string | null;
        goal: goalEnum | null;
      } | null;
    } & {
      id: string;
      name: string;
      email: string;
      emailVerified: Date | null;
      role: string | null;
      hashedPassword?: string | null;
      image: string | null;
      profileId: string | null;
    })
  | null
  | undefined;
