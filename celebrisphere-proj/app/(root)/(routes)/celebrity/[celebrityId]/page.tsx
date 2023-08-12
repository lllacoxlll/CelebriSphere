import prismadb from "@/lib/prismadb";
import { CelebrityForm } from "./components/celebrity-form";

interface CelebrityIdPageProps {
    params: {
        celebrityId: string;
    };
};

const CelebrityIdPage = async ({
    params
}: CelebrityIdPageProps) => {
    //TODO: Check subscription

    const celebrity = await prismadb.celebrity.findUnique({
        where: {
            id: params.celebrityId,
        }
    });

    const categories = await prismadb.category.findMany();

    return (
        <CelebrityForm
            initialData={celebrity}
            categories={categories}
        />
            
    )
}

export default CelebrityIdPage;