export default function Navbar() {
    const styles = {
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#41B06E',
            padding: '15px 30px',
        },
        navbarLeft: {
            display: 'flex',
            alignItems: 'center',
        },
        logo: {
            height: '40px',
            marginRight: '10px',
        },
        websiteName: {
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        navbarRight: {
            display: 'flex',
            alignItems: 'center',
        },
        searchBar: {
            padding: '5px 15px',
            borderRadius: '20px',
            border: 'none',
            outline: 'none',
            marginRight: '20px',
            fontSize: '1rem',
        },
        navLink: {
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            marginLeft: '20px',
            padding: '10px 15px',
            borderRadius: '8px',
            transition: 'background-color 0.3s ease',
        },
        navLinkHover: {
            backgroundColor: '#34A564',
        },
        loginLink: {
            backgroundColor: 'white',
            color: '#41B06E',
            border: '2px solid white',
            padding: '10px 15px',
            borderRadius: '8px',
            marginLeft: '20px',
            transition: 'all 0.3s ease',
        },
        loginLinkHover: {
            backgroundColor: '#41B06E',
            color: 'white',
            border: '2px solid #41B06E',
        },
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.navbarLeft}>
                <img src="logo.png" alt="Logo" style={styles.logo} />
                <span style={styles.websiteName}>EstateHub</span>
            </div>
            <div style={styles.navbarRight}>
                <input
                    type="text"
                    placeholder="Search..."
                    style={styles.searchBar}
                />
                <a href="#" style={styles.navLink}>Properties</a>
                <a href="#" style={styles.navLink}>Agent</a>
                <a href="#" style={styles.navLink}>Contact</a>
                <a
                    href="#"
                    style={styles.loginLink}
                    onMouseEnter={(e) => (e.target.style = styles.loginLinkHover)}
                    onMouseLeave={(e) => (e.target.style = styles.loginLink)}
                >
                    Login
                </a>
            </div>
        </nav>
    );
}
