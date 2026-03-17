export type ResultExpected = {
  id: string;
  name: string;
  logo_url?: string;
  clubInformations: clubInformations;
};

export type clubInformations = {
  contact_telephone?: string;
  contact_email?: string;
  president_name?: string;
  president_email?: string;
  president_phone?: string;
  correspondant_name?: string;
  correspondant_email?: string;
  correspondant_phone?: string;
};
