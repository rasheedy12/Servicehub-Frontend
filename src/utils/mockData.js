const mockData = {
    providers: [
        { id: 1, name: "John's Plumbing Services", rating: 4.8, reviews: 42, distance: 2.3, specialty: "Professional plumbing services with 15+ years of experience. Emergency repairs available.", available: true, avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=JS" },
        { id: 2, name: "Sarah's Cleaning Service", rating: 4.9, reviews: 78, distance: 3.7, specialty: "Residential and commercial cleaning services. Eco-friendly products available upon request.", available: false, avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=SC" },
        { id: 3, name: "Mike's Electrical", rating: 4.6, reviews: 36, distance: 4.1, specialty: "Licensed electrician specializing in residential and small commercial electrical work.", available: true, avatar: "https://placehold.co/100x100/E2E8F0/4A5568?text=ME" },
    ],
    bookings: [
        { id: 1, date: "OCT 11", time: "9:00 AM", service: "Emergency Plumbing Repairs", provider: "John Smith - Professional Plumber", address: "123 Main Street, Apt 4B, San Francisco, CA 94103", status: "Confirmed" },
        { id: 2, date: "OCT 15", time: "2:00 PM", service: "House Cleaning Service", provider: "Sarah's Cleaning - Residential Cleaning", address: "123 Main Street, Apt 4B, San Francisco, CA 94103", status: "Confirmed" },
    ],
    bookingHistory: [
        { id: 1, date: "Sep 28, 2023", service: "Electrical Repairs", provider: "Mike's Electrical", status: "Completed", reviewed: false },
        { id: 2, date: "Sep 15, 2023", service: "House Cleaning", provider: "Sarah's Cleaning", status: "Completed", reviewed: true },
        { id: 3, date: "Sep 5, 2023", service: "Plumbing Repairs", provider: "John Smith", status: "Completed", reviewed: true },
    ]
};
