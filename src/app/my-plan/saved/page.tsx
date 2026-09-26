import SavedItemCard from '@/app/components/planComponents/savedCard';

const page = async() => {
    return (
        <div className='flex flex-col gap-4'>
            <SavedItemCard/>
        </div>
    );
};

export default page;