declare module 'react-mailchimp-subscribe' {
  import React from 'react';
  type Status = 'sending' | 'success' | 'error' | null;
  interface MailchimpSubscribeProps {
    url: string;
    render?: (props: {
      subscribe: (data: Record<string, string>) => void;
      status: Status;
      message: string | Error | null;
    }) => React.ReactNode;
  }
  const MailchimpSubscribe: React.FC<MailchimpSubscribeProps>;
  export default MailchimpSubscribe;
}

interface NodeRequire {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
}
