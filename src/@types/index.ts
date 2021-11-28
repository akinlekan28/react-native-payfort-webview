interface URL {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    username: string;
    toString(): string;
};

export type AddCardProps = {
    isLive: Boolean;
    callBackUrl: URL;
    merchantIdentifier: String;
    accessCode: String;
    signature: String;
    merchantReference: String;
  };