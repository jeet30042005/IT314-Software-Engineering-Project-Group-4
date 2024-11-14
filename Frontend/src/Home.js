export default function Home() {
    return (
        <div>
            {/* Navbar */}
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
            

            <div style={{ position: 'relative', height: '500px', width: '208vh', backgroundColor: '#ccc', backgroundImage: 'url(https://eycrk5cno2n.exactdn.com/wp-content/uploads/2022/02/The-Importance-of-High-Quality-Real-Estate-Photos-v3.jpg?strip=all&lossy=1&ssl=1)', backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '550px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Find Your Dream Home</h1>
                        <div>
                            <input type="text" placeholder="Enter an address, city, or ZIP code" style={{ padding: '0.5rem', width: '300px', marginRight: '0.5rem' }} />
                            <button style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>Search</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Property Listings */}
            <div style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Properties</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                    {[
                        { image: 'https://d1ja9tyo8nbkbc.cloudfront.net/54211581_S0439/S0439/S0439-R0100/1077232389/1077232389-1.jpg?version=1720582849&width=640', title: 'Nirma', address: 'Gandhinagar, Gujarat', price: 'Rs 150 rupyaa dega' },
                        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGXnjgjKDyb2NfYx60qN3PZsjtv9sFwb5a7UuQLwFpWGA9Aa-eIvpvMpcOa7JWz4Oc-o&usqp=CAU', title: 'DAIICT', address: 'Gandhinagar, Gujarat', price: 'Rs 150 rupyaa dega' },
                        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7l7ShCsMStw1aUrP74tliSTZh6adfi0oFGjdgjJDHO6x5kxL6pL-wHBGEv-KMJezTAMw&usqp=CAU', title: 'DAIICT', address: 'Gandhinagar, Gujarat', price: 'Rs 150 rupyaa dega' },
                    ].map(property => (
                        <div key={property.title} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                            <img src={property.image} alt={property.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '1rem' }}>
                                <h3 style={{ marginTop: 0 }}>{property.title}</h3>
                                <p>{property.address}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                    <span style={{ fontWeight: 'bold', color: '#28a745' }}>{property.price}</span>
                                    <button style={{ padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', cursor: 'pointer' }}>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

                    
            <footer style={{ backgroundColor: '#282828', color: '#f1f1f1', padding: '3rem 0', marginTop: '50px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', padding: '0 1rem' }}>

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
} 