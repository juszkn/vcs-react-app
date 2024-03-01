function Navigation() {
    return (
        <>
            <div>
                <ul>
                    <li>Guide</li>
                    <li>Config</li>
                    <li>Plugin</li>
                    <li>
                        <button className="dropdown-item" type="button">
                            <span>Resources</span>
                            <i className="bi bi-chevron-down"></i>
                        </button>
                    </li>
                    <li>
                        <button className="dropdown-item" type="button">
                            <span>Version</span>
                            <i className="bi bi-chevron-down"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Navigation
