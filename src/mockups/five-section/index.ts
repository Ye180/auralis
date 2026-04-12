

export interface FiveSectionItemProps {
    type: string;
    price: number;
    period: string;
    transparent?: boolean;
    features: string[];
}

export const ItemsFiveSection: FiveSectionItemProps[] = [
    {
        type: "Standard",
        price: 25000,
        period: "month",
        transparent: true,
        features: [
            "AI-powered insights",
            "Expert-guided decisions",
            "Built for progress over time",
            "Basic integrations",
            "Secure workspace"
        ],
    },
    {
        type: "Pro",
        price: 50000,
        period: "month",
         transparent: false,
        features: [
            "AI-powered insights",
            "Advanced AI analytics",
            "Customizable dashboards",
            "Advanced integrations",
            "Priority support",
        ],
    },
];
    

export default ItemsFiveSection;