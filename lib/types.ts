import { z } from 'zod';

const zodFormats : {
    name: z.ZodString,
    email: z.ZodEmail,
    address: z.ZodString,
    date: z.ZodDate,
    ip: z.ZodIPv4,
} = {
    name: z.string().length(120),
    email: z.email().length(150),
    address: z.string().length(255),
    date: z.date(),
    ip: z.ipv4(),
};

type Name  = z.infer<typeof zodFormats.name>;
type Email  = z.infer<typeof zodFormats.email>;
type Address  = z.infer<typeof zodFormats.address>;
type Phone = `${number}`;
type Date = z.infer<typeof zodFormats.date>;
type IPv4 = z.infer<typeof zodFormats.ip>;

export type Base = {
  id: string;
  name: Name;
  phone: Phone;
  created_at: Date;
};

export type Inquiries = Base & {
  email: Email;
  dob: Date;
  ip: IPv4;
};

export type Awaiting = Base & {
  address: Address;
  comment: string;
  document: string;
};

export type Shipment = Awaiting & {
  pod: string;
};

export type NavTreeLink = {
    title: string,
    url: string,
};

export type NavLinkGroup = [string, NavTreeLink[]];

export type NavItem = {
  title: string;
  url?: string;
  icon?: React.ComponentType<any>;
  isActive?: boolean;
  tree?: NavLinkGroup;
};