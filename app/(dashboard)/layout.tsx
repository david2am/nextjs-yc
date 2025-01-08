export default function Layout ({ children }: { children: React.ReactNode}) {
    return (
        <div>
            <h2 className="text-3x">DASHBOARD</h2>
            {children}
        </div>
    )
}