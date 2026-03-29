export type Auction = {
  id: number
  crop: string
  producer: string
  location: string
  quantity: number
  basePrice: number
  highestBid: number
  endDate: string
  userBid: number | null
  image: string
}

const today = "2026-04-01"

export const initialAuctions: Auction[] = [

  { id:1, crop:"Apple", producer:"Himalaya Orchards", location:"Himachal", quantity:400, basePrice:80, highestBid:90, endDate:today, userBid:null, image:"" },
  { id:2, crop:"Orange", producer:"Nagpur Fresh", location:"Nagpur", quantity:300, basePrice:60, highestBid:65, endDate:today, userBid:null, image:"" },
  { id:3, crop:"Tomato", producer:"Salem Farms", location:"Salem", quantity:500, basePrice:15, highestBid:18, endDate:today, userBid:null, image:"" },
  { id:4, crop:"Potato", producer:"Agra Agro", location:"Agra", quantity:700, basePrice:12, highestBid:14, endDate:today, userBid:null, image:"" },
  { id:5, crop:"Onion", producer:"Nashik Agro", location:"Nashik", quantity:450, basePrice:20, highestBid:24, endDate:today, userBid:null, image:"" },

  { id:6, crop:"Mango", producer:"Andhra Fruits", location:"Vijayawada", quantity:600, basePrice:100, highestBid:110, endDate:today, userBid:null, image:"" },
  { id:7, crop:"Banana", producer:"Kerala Farms", location:"Kochi", quantity:800, basePrice:30, highestBid:35, endDate:today, userBid:null, image:"" },
  { id:8, crop:"Grapes", producer:"Vineyard Fresh", location:"Nashik", quantity:450, basePrice:70, highestBid:75, endDate:today, userBid:null, image:"" },
  { id:9, crop:"Pineapple", producer:"Assam Agro", location:"Guwahati", quantity:320, basePrice:50, highestBid:55, endDate:today, userBid:null, image:"" },
  { id:10, crop:"Guava", producer:"UP Fresh", location:"Allahabad", quantity:270, basePrice:55, highestBid:60, endDate:today, userBid:null, image:"" },

  { id:11, crop:"Carrot", producer:"Punjab Fresh", location:"Ludhiana", quantity:350, basePrice:25, highestBid:28, endDate:today, userBid:null, image:"" },
  { id:12, crop:"Cabbage", producer:"Nilgiri Farms", location:"Ooty", quantity:420, basePrice:18, highestBid:20, endDate:today, userBid:null, image:"" },
  { id:13, crop:"Beans", producer:"Green Valley", location:"Coimbatore", quantity:250, basePrice:40, highestBid:45, endDate:today, userBid:null, image:"" },
  { id:14, crop:"Brinjal", producer:"Madurai Agro", location:"Madurai", quantity:390, basePrice:22, highestBid:25, endDate:today, userBid:null, image:"" },
  { id:15, crop:"Chilli", producer:"Guntur Farms", location:"Guntur", quantity:280, basePrice:90, highestBid:95, endDate:today, userBid:null, image:"" },

  { id:16, crop:"Peas", producer:"Haryana Fresh", location:"Karnal", quantity:340, basePrice:35, highestBid:40, endDate:today, userBid:null, image:"" },
  { id:17, crop:"Corn", producer:"Karnataka Agro", location:"Mysore", quantity:600, basePrice:20, highestBid:22, endDate:today, userBid:null, image:"" },
  { id:18, crop:"Wheat", producer:"MP Farms", location:"Bhopal", quantity:900, basePrice:18, highestBid:19, endDate:today, userBid:null, image:"" },
  { id:19, crop:"Rice", producer:"Delta Farms", location:"Thanjavur", quantity:1000, basePrice:25, highestBid:27, endDate:today, userBid:null, image:"" },
  { id:20, crop:"Sugarcane", producer:"UP Agro", location:"Meerut", quantity:1200, basePrice:10, highestBid:12, endDate:today, userBid:null, image:"" },

  { id:21, crop:"Turmeric", producer:"Erode Spice", location:"Erode", quantity:200, basePrice:120, highestBid:130, endDate:today, userBid:null, image:"" },
  { id:22, crop:"Ginger", producer:"North East Farms", location:"Shillong", quantity:180, basePrice:90, highestBid:95, endDate:today, userBid:null, image:"" },
  { id:23, crop:"Garlic", producer:"Indore Agro", location:"Indore", quantity:260, basePrice:85, highestBid:90, endDate:today, userBid:null, image:"" },
  { id:24, crop:"Cucumber", producer:"Chennai Greens", location:"Chennai", quantity:300, basePrice:30, highestBid:35, endDate:today, userBid:null, image:"" },
  { id:25, crop:"Pumpkin", producer:"AP Farms", location:"Tirupati", quantity:500, basePrice:18, highestBid:22, endDate:today, userBid:null, image:"" },

  { id:26, crop:"Spinach", producer:"Organic Valley", location:"Pune", quantity:150, basePrice:20, highestBid:24, endDate:today, userBid:null, image:"" },
  { id:27, crop:"Drumstick", producer:"Tamil Agro", location:"Dindigul", quantity:220, basePrice:45, highestBid:50, endDate:today, userBid:null, image:"" },
  { id:28, crop:"Papaya", producer:"South Farms", location:"Madurai", quantity:310, basePrice:45, highestBid:50, endDate:today, userBid:null, image:"" },
  { id:29, crop:"Watermelon", producer:"Rajasthan Agro", location:"Jaipur", quantity:700, basePrice:15, highestBid:18, endDate:today, userBid:null, image:"" },
  { id:30, crop:"Muskmelon", producer:"Desert Farms", location:"Jodhpur", quantity:600, basePrice:25, highestBid:28, endDate:today, userBid:null, image:"" },

  { id:31, crop:"Millets", producer:"Karnataka Organic", location:"Hubli", quantity:500, basePrice:40, highestBid:45, endDate:today, userBid:null, image:"" },
  { id:32, crop:"Groundnut", producer:"AP Nuts", location:"Anantapur", quantity:450, basePrice:55, highestBid:60, endDate:today, userBid:null, image:"" },
  { id:33, crop:"Mustard", producer:"Rajasthan Farms", location:"Udaipur", quantity:380, basePrice:70, highestBid:75, endDate:today, userBid:null, image:"" },
  { id:34, crop:"Soybean", producer:"MP Agro", location:"Gwalior", quantity:520, basePrice:65, highestBid:70, endDate:today, userBid:null, image:"" },
  { id:35, crop:"Lemon", producer:"Nagpur Citrus", location:"Nagpur", quantity:330, basePrice:50, highestBid:55, endDate:today, userBid:null, image:"" },

  { id:36, crop:"Pomegranate", producer:"Solapur Farms", location:"Solapur", quantity:420, basePrice:110, highestBid:120, endDate:today, userBid:null, image:"" },
  { id:37, crop:"Fig", producer:"DryFruit Agro", location:"Anantapur", quantity:140, basePrice:200, highestBid:220, endDate:today, userBid:null, image:"" },
  { id:38, crop:"Cashew", producer:"Goa Farms", location:"Goa", quantity:260, basePrice:300, highestBid:320, endDate:today, userBid:null, image:"" },
  { id:39, crop:"Coconut", producer:"Kerala Agro", location:"Kollam", quantity:900, basePrice:25, highestBid:28, endDate:today, userBid:null, image:"" },
  { id:40, crop:"Black Pepper", producer:"Spice Valley", location:"Wayanad", quantity:150, basePrice:450, highestBid:470, endDate:today, userBid:null, image:"" },

  { id:41, crop:"Cardamom", producer:"Idukki Farms", location:"Idukki", quantity:120, basePrice:900, highestBid:950, endDate:today, userBid:null, image:"" },
  { id:42, crop:"Tea Leaves", producer:"Assam Tea", location:"Assam", quantity:800, basePrice:60, highestBid:70, endDate:today, userBid:null, image:"" },
  { id:43, crop:"Coffee Beans", producer:"Coorg Coffee", location:"Coorg", quantity:600, basePrice:150, highestBid:170, endDate:today, userBid:null, image:"" },
  { id:44, crop:"Jaggery", producer:"Kolhapur Agro", location:"Kolhapur", quantity:700, basePrice:45, highestBid:50, endDate:today, userBid:null, image:"" },
  { id:45, crop:"Cotton", producer:"Vidarbha Farms", location:"Nagpur", quantity:1000, basePrice:70, highestBid:80, endDate:today, userBid:null, image:"" },

  { id:46, crop:"Sunflower", producer:"Karnataka Seeds", location:"Belgaum", quantity:500, basePrice:55, highestBid:60, endDate:today, userBid:null, image:"" },
  { id:47, crop:"Lentils", producer:"Bihar Agro", location:"Patna", quantity:420, basePrice:65, highestBid:70, endDate:today, userBid:null, image:"" },
  { id:48, crop:"Chickpeas", producer:"MP Pulses", location:"Indore", quantity:380, basePrice:60, highestBid:68, endDate:today, userBid:null, image:"" },
  { id:49, crop:"Barley", producer:"Punjab Agro", location:"Amritsar", quantity:700, basePrice:30, highestBid:35, endDate:today, userBid:null, image:"" },
  { id:50, crop:"Saffron", producer:"Kashmir Farms", location:"Srinagar", quantity:50, basePrice:1500, highestBid:1600, endDate:today, userBid:null, image:"" }

]