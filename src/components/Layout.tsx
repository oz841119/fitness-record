
import TopNav from './TopNav'
export default function Layout({children}: any) {
    return (
        <div>
            <TopNav/>
            <main>{children}</main>
        </div>
    )
}