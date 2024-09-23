import axios from 'axios';
import Event from './models/Event'; 

const fetchEvents = async () => {
    try {
        const response = await axios.get(' https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api/db.json'); 
        const events = response.data; 

        await Event.insertMany(events);
        console.log('Events fetched and stored successfully');
    } catch (error) {
        console.error('Error fetching events:', error);
    }
};

setInterval(fetchEvents, 3600000); 

  
