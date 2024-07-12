import dynamic from 'next/dynamic';

const NoSSRClientComponent = dynamic(() => import('./ClientComponent'), {
    ssr: false,
});

export default NoSSRClientComponent;
