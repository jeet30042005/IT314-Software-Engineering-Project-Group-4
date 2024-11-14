export default function Landing() {
    return (

        <div style={{  fontFamily: 'Arial, sans-serif', Width: '100%', margin: '0 auto' }}>
            {/* Header */}
            <header style={{ backgroundColor: '#fff', boxShadow: '0px 2px 5px rgba(0,0,0,0.1)', padding: '1rem 0', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>
                <div style={{ width: '90%', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo Section */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ysGLsZfbPr6zprdlKrSSo30yCkac7NB9iw&s" alt="" style={{ width: '45px', height: '45px' }} />
                        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#28a745' }}>RealEstateHub</span>
                    </div>

                    {/* Navigation Links */}
                    <nav>
                        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                            <li style={{ marginLeft: '20px' }}><a href="#" style={{ padding: '0.5rem', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '5px', fontSize: '1rem' }}>
                                Login/Signup
                            </a></li>
                        </ul>
                    </nav>

                </div>
            </header>

            {/* Hero Section */}
            <div style={{  display: 'flex', justifyContent: 'space-between', padding: '0 50px', marginTop: '500px', alignItems: 'center' }}>
                {/* Left Section: Text */}
                <div style={{ paddingRight: '50px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '40px' }}>Find your dream property <br />today</h2>
                    <p style={{ marginBottom: '20px' }}>Discover properties for sale and rent</p>
                    <div>
                        <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', marginRight: '10px', cursor: 'pointer' }}>Buy property</button>
                        <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Rent property</button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', maxWidth: '400px' }}>
                        <div>
                            <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>30K+</h3>
                            <p>Properties</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>5K+</h3>
                            <p>People</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>500K+</h3>
                            <p>Active users</p>
                        </div>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ padding: '20px', borderRadius: '10px' }}>
                        <img src="https://eycrk5cno2n.exactdn.com/wp-content/uploads/2022/02/The-Importance-of-High-Quality-Real-Estate-Photos-v3.jpg?strip=all&lossy=1&ssl=1" alt="Featured property" style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <div>
                                <p style={{ marginBottom: '5px' }}><strong>Features:</strong> 3</p>
                                <p style={{ marginBottom: '5px' }}> <strong>Property title:</strong> Apartment</p>
                                <button style={{ backgroundColor: 'white', color: 'black', border: '1px solid black', padding: '5px 10px', borderRadius: '5px', marginBottom: '5px', marginRight: '10px', cursor: 'pointer' }}>Search now</button>
                                <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>View details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Top Properties */}
            <div style={{ padding: '20px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Top properties this week</h2>
                <div style={{ display: 'flex', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                    {[{
                        image: "https://d1ja9tyo8nbkbc.cloudfront.net/54211581_S0439/S0439/S0439-R0100/1077232389/1077232389-1.jpg?version=1720582849&width=640 ",
                        title: "Lakefront Villa",
                        price: "Rs 5 Crore",
                        beds: 4,
                        baths: 3,
                        area: 3000,
                    }, {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGXnjgjKDyb2NfYx60qN3PZsjtv9sFwb5a7UuQLwFpWGA9Aa-eIvpvMpcOa7JWz4Oc-o&usqp=CAU",
                        title: "Luxury Condo",
                        price: 1800000,
                        beds: 3,
                        baths: 2,
                        area: 1500,
                    }, {
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7l7ShCsMStw1aUrP74tliSTZh6adfi0oFGjdgjJDHO6x5kxL6pL-wHBGEv-KMJezTAMw&usqp=CAU",
                        title: "Downtown Apartment",
                        price: 850000,
                        beds: 2,
                        baths: 2,
                        area: 1000,
                    }, {
                        image: "https://d1ja9tyo8nbkbc.cloudfront.net/54211581_S0439/S0439/S0439-R0100/1077232389/1077232389-1.jpg?version=1720582849&width=640",
                        title: "Suburban House",
                        price: 650000,
                        beds: 4,
                        baths: 3,
                        area: 2500,
                    }].map((property, index) => (
                        <div key={index} style={{ border: '1px solid #e0e0e0', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px' }}>
                            <img src={property.image} alt={property.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                            <div style={{ padding: '15px' }}>
                                <h3 style={{ margin: '0 0 10px 0' }}>{property.title}</h3>
                                <p style={{ fontWeight: 'bold', margin: '0 0 10px 0' }}>{property.price}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <span style={{ marginRight: '5px' }}>Beds:{property.beds}</span>
                                    <span style={{ marginRight: '5px' }}>Baths:{property.baths}</span>
                                    <span style={{ marginRight: '5px' }}>Area:{property.area} sqft</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                    <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' }}>View</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer style={{ backgroundColor: '#282828', color: '#f1f1f1', padding: '2rem 0', marginTop: '30px',width:'100%' }}>
                <div style={{Width: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', padding: '0 1rem' }}>

                    {/* About Us Section */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>About Us</h3>
                        <p style={{ lineHeight: '1.6' }}>RealEstateHub is your trusted partner in finding the perfect home. We offer personalized services to help you find a home that fits your lifestyle and budget.</p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                            {['Home', 'Properties', 'Agents', 'Blog'].map(item => (
                                <li key={item} style={{ marginBottom: '0.5rem' }}>
                                    <a href="#" style={{ color: '#f1f1f1', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#28a745'} onMouseOut={e => e.target.style.color = '#f1f1f1'}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Us</h3>
                        <p style={{ lineHeight: '1.6' }}>
                            Near Reliance Chokdi<br />Gandhinagar, Gujarat<br />Phone: 9152355422<br />Email: info@realestatehub.com
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
