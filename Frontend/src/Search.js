// App.js
import React from "react";

function App() {
    const properties = [
        { id: 1, name: "Beautiful House", price: "$1,200,000", location: "San Francisco, CA" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGXnjgjKDyb2NfYx60qN3PZsjtv9sFwb5a7UuQLwFpWGA9Aa-eIvpvMpcOa7JWz4Oc-o&usqp=CAU"},
        { id: 2, name: "Modern Apartment", price: "$800,000", location: "Los Angeles, CA", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7l7ShCsMStw1aUrP74tliSTZh6adfi0oFGjdgjJDHO6x5kxL6pL-wHBGEv-KMJezTAMw&usqp=CAU "},
        { id: 3, name: "Cozy Cottage", price: "$500,000", location: "Austin, TX" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGXnjgjKDyb2NfYx60qN3PZsjtv9sFwb5a7UuQLwFpWGA9Aa-eIvpvMpcOa7JWz4Oc-o&usqp=CAU "},
        // Add more properties here as needed
    ];

    return (
        <div style={styles.app}>
            {/* Header */}
            <header style={{ backgroundColor: '#fff', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)', padding: '0.5rem 0', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
                <div style={{ width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo Section */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ysGLsZfbPr6zprdlKrSSo30yCkac7NB9iw&s" alt="" style={{ width: '45px', height: '45px' }} />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745' }}>RealEstateHub</span>
                    </div>

                    {/* Navigation Links */}
                    <nav>
                        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                            <li style={{ marginLeft: '20px' }}><a href="#" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem' }}>Properties</a></li>
                            <li style={{ marginLeft: '20px' }}><a href="#" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem' }}>Agents</a></li>
                            <li style={{ marginLeft: '20px' }}><a href="#" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem' }}>Services</a></li>
                            <li style={{ marginLeft: '20px' }}><a href="#" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem' }}>Blog</a></li>
                            <li style={{ marginLeft: '20px' }}><a href="#" style={{ textDecoration: 'none', color: '#333', fontSize: '1rem' }}>Contact</a></li>
                            <li style={{ marginLeft: '20px' }}><a href="#" style={{ padding: '0.5rem', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '1rem' }}>
                                Login/Signup
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Sticky Search Filters */}
            <section style={styles.searchFilters}>
                <input type="text" placeholder="Search by city, zip code, or neighborhood" style={styles.searchBar} />
                <select style={styles.select}>
                    <option>City/Region</option>
                    <option>New York</option>
                    <option>Los Angeles</option>
                    <option>San Francisco</option>
                </select>
                <select style={styles.select}>
                    <option>Property Type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Condo</option>
                </select>
                <input type="number" placeholder="Min Price" style={styles.input} />
                <input type="number" placeholder="Max Price" style={styles.input} />
                <input type="number" placeholder="Bedrooms" style={styles.input} />
                <input type="number" placeholder="Bathrooms" style={styles.input} />
                <button style={styles.searchButton}>Search</button>
            </section>

            {/* Scrollable Property List */}
            <div style={styles.propertyContainer}>
                <section style={styles.propertyList}>
                    {properties.map((property) => (
                        <div key={property.id} style={styles.propertyCard}>
                            <img src={property.image} alt={property.name} style={styles.propertyImage} />
                            <h2 style={styles.propertyName}>{property.name}</h2>
                            <p style={styles.propertyPrice}>{property.price}</p>
                            <p style={styles.propertyLocation}>{property.location}</p>
                            <button style={styles.saveButton}>View</button>
                            <button style={styles.contactButton}>Contact</button>
                        </div>
                    ))}
                </section>
            </div>

            {/* Footer at the Bottom */}
            <footer style={styles.footer}>
                <p style={styles.footerText}>© 2024 Real Estate Hub</p>
                <div>
                    <a href="#home" style={styles.footerLink}>Home</a>
                    <a href="#properties" style={styles.footerLink}>Properties</a>
                    <a href="#agents" style={styles.footerLink}>Agents</a>
                    <a href="#service" style={styles.footerLink}>Service</a>
                    <a href="#contact" style={styles.footerLink}>Contact</a>
                </div>
            </footer>
        </div>
    );
}

const styles = {
    app: {
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#28a745",
        color: "white",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1000",
    },
    headerTitle: {
        margin: "0",
    },
    navLink: {
        color: "white",
        margin: "0 1rem",
        textDecoration: "none",
    },
    loginButton: {
        backgroundColor: "white",
        color: "#28a745",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        cursor: "pointer",
    },
    searchFilters: {
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "1rem",
        backgroundColor: "white",
        marginTop: "4rem", // Creates space for the fixed header
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: "4rem", // Sticks just below the header
        zIndex: "900",
    },
    searchBar: {
        flex: "1",
        padding: "0.5rem",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    select: {
        padding: "0.5rem",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    input: {
        padding: "0.5rem",
        borderRadius: "5px",
        border: "1px solid #ccc",
    },
    searchButton: {
        backgroundColor: "#28a745",
        color: "white",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    propertyContainer: {
        flex: "1",
        overflowY: "auto",
        marginTop:"70px",
        marginBottom: "10 rem", // Creates space for the fixed footer
    },
    propertyList: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(333px, 1fr))",
        gap: "1rem",
        padding: "1rem",
    },
    propertyCard: {
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "white",
        padding: "1rem",
        textAlign: "center",
    },
    propertyImage: {
        maxWidth: "100%",
        borderRadius: "8px",
    },
    propertyName: {
        fontSize: "1.2rem",
        color: "#333",
    },
    propertyPrice: {
        color: "#28a745",
        fontSize: "1rem",
        margin: "0.5rem 0",
    },
    propertyLocation: {
        color: "#555",
        fontSize: "0.9rem",
    },
    saveButton: {
        backgroundColor: "#28a745",
        color: "white",
        margin: "0.5rem",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    contactButton: {
        backgroundColor: "green",
        color: "white",
        margin: "0.5rem",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    footer: {
        position: "fixed",
        bottom: "0",
        width: "100%",
        padding: "1rem",
        backgroundColor: "#282828",
        color: "white",
        textAlign: "center",
        right: 0,

    },
    footerText: {
        margin: "0.5rem 0",
    },
    footerLink: {
        color: "white",
        margin: "0 1rem",
        textDecoration: "none",
    },
};

export default App;