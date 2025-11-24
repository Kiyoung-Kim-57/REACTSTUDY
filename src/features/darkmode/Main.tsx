import { Card } from "./Card";

export function Main() {
    return (
        <main style={{ flex: 1 }}>
            <ul style={{ display: "flex", gap: 16 }}>
                <Card title="Card 1" description="Card 1 description" />
                <Card title="Card 2" description="Card 2 description" />
                <Card title="Card 3" description="Card 3 description" />
            </ul>
        </main>
    );
}
