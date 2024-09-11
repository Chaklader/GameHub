import usePlatforms from 'src/hooks/usePlatforms.ts';

const usePlatform = (platformId?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms.results.find((p) => p.id === platformId);
};
export default usePlatform;
