

export interface FiveSectionItemProps {
    type: string;
    price: number;
    period: string;
    transparent?: boolean;
    features: string[];
}

export const ItemsFiveSection: FiveSectionItemProps[] = [
    {
        type: "Essentiel",
        price: 0,
        period: "Découverte",
        transparent: true,
        features: [
            "Accès aux sentiers forestiers",
            "Méditations guidées en nature",
            "Ateliers de reconnexion",
            "Espaces de contemplation",
            "Communauté bienveillante"
        ],
    },
    {
        type: "Immersion",
        price: 0,
        period: "Expérience complète",
         transparent: false,
        features: [
            "Retraites en pleine nature",
            "Accompagnement personnalisé",
            "Cabanes en forêt",
            "Bains de forêt thérapeutiques",
            "Accès prioritaire aux événements",
        ],
    },
];
    

export default ItemsFiveSection;