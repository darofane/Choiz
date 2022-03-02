export class MedicineModel {
    data: {
        pills:{ 
            brand: string,
            laboratory: string,
            price: number
        }[];
        ring: {
            brand: string,
            laboratory: string,
            price: number
        }[];
        patches: {
            brand: string,
            laboratory: string,
            price: number
        }[];

    } | undefined

}