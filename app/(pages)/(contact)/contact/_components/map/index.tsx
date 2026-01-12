"use client"
import WorldMap from "@/components/ui/world-map"

export const Map = () => {
    return (
        <WorldMap
            lineColor="#000"
            dots={[
                {
                    start: {
                        lat: -23.5505,
                        lng: -46.6333,
                        label: "Brasil - São Paulo"
                    },
                    end: {
                        lat: 64.2008,
                        lng: -149.4937,
                        label: "Alaska"
                    }
                },
                {
                    start: {
                        lat: -23.5505,
                        lng: -46.6333,
                        label: "Brasil - São Paulo"
                    },
                    end: {
                        lat: 39.8283,
                        lng: -98.5795,
                        label: "Estados Unidos da América"
                    }
                },
                {
                    start: {
                        lat: -23.5505,
                        lng: -46.6333,
                        label: "Brasil - São Paulo"
                    },
                    end: {
                        lat: 50.8503,
                        lng: 4.3517,
                        label: "Bélgica"
                    }
                },
                {
                    start: {
                        lat: -23.5505,
                        lng: -46.6333,
                        label: "Brasil - São Paulo"
                    },
                    end: {
                        lat: 28.6139,
                        lng: 77.209,
                        label: "Vladivostok"
                    }
                },
                {
                    start: {
                        lat: -23.5505,
                        lng: -46.6333,
                        label: "Brasil - São Paulo"
                    },
                    end: {
                        lat: -35.2809,
                        lng: 149.1300,
                        label: "Austrália"
                    }
                },
                {
                    start: {
                        lat: -23.5505,
                        lng: -46.6333,
                        label: "Brasil - São Paulo"
                    },
                    end: {
                        lat: 39.9042,
                        lng: 116.4074,
                        label: "China"
                    }
                }
            ]}
        />
    )
}
