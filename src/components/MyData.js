import chair from '../assets/images/chair.png';
import book from '../assets/images/products/book.jpg';
import shoes from '../assets/images/products/shoes.jpg';
import printer from '../assets/images/products/printer.jpg';
import antique from '../assets/images/products/antique.jpg';
import camera from '../assets/images/products/camera.jpg';
import headphones from '../assets/images/products/headphones.jpg';
import painting from '../assets/images/products/painting.jpg';
import pizza from '../assets/images/products/pizza.jpg';
import tv from '../assets/images/products/tv.jpg';

const MyData = [
  {
     id: 1,
     image: chair,
     item_title: 'Wooden Chair with Cushion',
     del_address: '7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
     deliver_date:'05 Dec 2023',
     deliver_time:'9:45 PM',
     selling_cost: '1200',
     delivery_charges: '178',
     status: 'delivered',
     sel_address:'7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
     sel_contact : '8456975486',
     rcvr_name : 'Joseph Dias',
     rcvr_contact : '8457962548',
     business_name :'Essentials SUpermarket'
  },
  {
     id: 2,
     image: book,
     item_title: 'Book by a famous author',
     del_address: '47 North Beaver Ridge StreetSalt Lake City, UT 84119',
     deliver_date:'23 Aug 2023',
     deliver_time:'4:55 PM',
     selling_cost: '1570',
     delivery_charges: '120',
     status: 'pending',
     sel_address:'7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
     sel_contact : '8456975486',
     rcvr_name : 'Joseph Dias',
     rcvr_contact : '8457962548',
     business_name :'Essentials SUpermarket'
  },
  {
     id: 3,
     image: shoes,
     item_title: 'Puma Shoes',
     del_address: '45,5th Floor, Industry House, Race Course Road, Bangalore',
     deliver_date:'09 Nov 2023',
     deliver_time:'9:30 AM',
     selling_cost: '900',
     delivery_charges: '100',
     status: 'pending',
     sel_address:'7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
     sel_contact : '8456975486',
     rcvr_name : 'Joseph Dias',
     rcvr_contact : '8457962548',
     business_name :'Essentials SUpermarket'
  },
  {
     id: 4,
     image: printer,
     item_title: 'HP Printer',
     del_address: '61,aver-ready-2, Ct Street, Avenue Road, Dubai',
     deliver_date:'12 Mar 2023',
     deliver_time:'11:05 AM',
     selling_cost: '300',
     delivery_charges: '58',
     status: 'pending',
     sel_address:'7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
     sel_contact : '8456975486',
     rcvr_name : 'Joseph Dias',
     rcvr_contact : '8457962548',
     business_name :'Essentials SUpermarket'

  },
  {
     id: 5,
     image: antique,
     item_title: 'Antique Vase',
     del_address: '7 Glen Eagles Street-New York, NY 10002',
     deliver_date:'17 Apr 2023',
     deliver_time:'7:15 PM',
     selling_cost: '1980',
     delivery_charges: '218',
     status: 'delivered',
     sel_address:'7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
     sel_contact : '8456975486',
     rcvr_name : 'Joseph Dias',
     rcvr_contact : '8457962548',
     business_name :'Essentials SUpermarket'

  },
  {
     id: 6,
     image: camera,
     item_title: 'Camera',
     del_address: '34 N. Anna-dale Lane, New Bedford, United Kingdom',
     deliver_date:'03 Jan 2023',
     deliver_time:'3:10 PM',
     selling_cost: '1305',
     delivery_charges: '160',
     status: 'pending',
     sel_address:'7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
     sel_contact : '8456975486',
     rcvr_name : 'Joseph Dias',
     rcvr_contact : '8457962548',
     business_name :'Essentials SUpermarket'
  },
  {
     id: 7,
     image: headphones,
     item_title: 'Headphones',
     del_address: '9-e, Lax Ind Estate, 9-e New Link Road, West-Mumbai',
     deliver_date:'30 Jun 2023',
     deliver_time:'2:11 PM',
     selling_cost: '105',
     delivery_charges: '60',
     status: 'delivered',
     sel_address:'7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
     sel_contact : '8456975486',
     rcvr_name : 'Joseph Dias',
     rcvr_contact : '8457962548',
     business_name :'Essentials SUpermarket'
 },
 {
     id: 8,
     image: pizza,
     item_title: 'Pizza',
     del_address: '8032 West Ave.Davenport, IA',
     deliver_date:'23 Apr 2023',
     deliver_time:'8:10 AM',
     selling_cost: '300',
     delivery_charges: '30',
     status: 'pending',
     sel_address:'7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
     sel_contact : '8456975486',
     rcvr_name : 'Joseph Dias',
     rcvr_contact : '8457962548',
     business_name :'Essentials SUpermarket'
},
{
   id: 9,
   image: painting,
   item_title: 'Painting',
   del_address: 'West Delaware St.Fort Worth',
   deliver_date:'27 Aug 2023',
   deliver_time:'4:55 PM',
   selling_cost: '1570',
   delivery_charges: '120',
   status: 'delivered',
   sel_address:'7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
   sel_contact : '8456975486',
   rcvr_name : 'Joseph Dias',
   rcvr_contact : '8457962548',
   business_name :'Essentials SUpermarket'
},
{
   id: 10,
   image: tv,
   item_title: 'Television',
   del_address: '472, Old Madras Rd, Nr Syndicate Bank, Chennai',
   deliver_date:'29 Jul 2023',
   deliver_time:'6:05 PM',
   selling_cost: '1570',
   delivery_charges: '120',
   status: 'pending',
   sel_address:'7/8, Parasrampuria Bldg, Haji Bapu Rd, Nr Malad Post Office, Malad (east)',
     sel_contact : '8456975486',
     rcvr_name : 'Joseph Dias',
     rcvr_contact : '8457962548',
     business_name :'Essentials SUpermarket'
}
];

export default MyData;