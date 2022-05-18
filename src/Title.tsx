import { FC } from 'react';

type Props = {
    msg: string;
};

export const Title: FC<Props> = (props) => {
    const { msg } = props;
    return <h1>{msg}</h1>;
};
