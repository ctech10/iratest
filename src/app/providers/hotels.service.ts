import { Injectable } from '@angular/core';

@Injectable()
export class HotelsService {

hotels: any = [
  {
  "_id" : 1,
  "name" : "A Hotel Leonardo",
  "address" : {
    "city" : "Munich",
    "address" : "19 ABCV Street",
    "country" : "Germany"
  },
  "details" : {
    "starRating" : {
      "val" : 4.5,
      "txt" : "4.5 stars"
    },
    "brand" : {
      "val" : 2,
      "txt" : "Brand B"
    },
    "currency" : "USD",
    "checkIn" : "15:00",
    "checkOut" : "11:00",
    "numOfRooms" : 98
  },
  "amenities" : [
        {
          "val" : 1,
          "txt" : "Spa"
        },
        {
          "val" : 2,
          "txt" : "Kids Spa"
        },
        {
          "val" : 3,
          "txt" : "Sauna"
        },
        {
          "val" : 4,
          "txt" : "Olympic Pool"
        },
        {
          "val" : 5,
          "txt" : "Ran Bahar Size pool"
        },
        {
          "val" : 6,
          "txt" : "Angular Pool"
        },
        {
          "val" : 7,
          "txt" : "Swedish Massage"
        },
        {
          "val" : 8,
          "txt" : "Master Card"
        },
        {
          "val" : 9,
          "txt" : "Visa"
        },
        {
          "val" : 10,
          "txt" : "Diners"
        },
        {
          "val" : 11,
          "txt" : "American Express"
        }
  ],
  "description" : "this is the hotel description",
  "images" : [
    {
      "id" : 14691496,
      "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
      "name" : "80126L6018.JPG",
      "width" : 260,
      "height" : 200,
      "isThumbnail" : true
    },{
      "id" : 14691496,
      "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
      "name" : "80126L6018.JPG",
      "width" : 260,
      "height" : 200,
      "isThumbnail" : true
    },{
      "id" : 14691496,
      "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
      "name" : "80126L6018.JPG",
      "width" : 260,
      "height" : 200,
      "isThumbnail" : true
    }

  ],
  "roomTypes" : [
    {
      "id" : 1,
      "name" : "Dungeon room",
      "description" : "coolfrewxdfertert",
      "maxAdults" : 2,
      "maxChild" : 0,
      "maxGuests" : 3,
      "bathrooms" : 13,
      "bedrooms" : 1,
      "numberOfBeds" : 1,
      "isEditable" : true,
      "roomSize" : {
        "size" : 10,
        "unit" : "SquareMeters"
      },
      "images" : [
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
          "val" : 0
        },
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
          "val" : 1
        }
      ],
      "bedType" : {
        "txt" : "King Size",
        "val" : 3
      },
    },
    {
      "id" : 2,
      "name" : "#2 Room",
      "description" : "coolfrewxdfertert",
      "maxAdults" : 2,
      "maxChild" : 2,
      "maxGuests" : 3,
      "bathrooms" : 13,
      "bedrooms" : 1,
      "numberOfBeds" : 2,
      "isEditable" : false,
      "roomSize" : {
        "size" : 10,
        "unit" : "SquareMeters"
      },
      "images" : [
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
          "val" : 0
        },
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
          "val" : 1
        }
      ],
      "bedType" : {
        "txt" : "King Size",
        "val" : 3
      }
    },
    {
      "id" : 3,
      "name" : "Another nice room",
      "description" : "coolfrewxdfertert",
      "maxAdults" : 2,
      "maxChild" : 42,
      "maxGuests" : 3,
      "bathrooms" : 13,
      "bedrooms" : 1,
      "numberOfBeds" : 2,
      "isEditable" : true,
      "roomSize" : {
        "size" : 10,
        "unit" : "SquareMeters"
      },
      "images" : [
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
          "val" : 0
        },
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
          "val" : 1
        }
      ],
      "bedType" : {
        "txt" : "King Size",
        "val" : 3
      }
    },
    {
      "id" : 4,
      "name" : "D room",
      "description" : "coolfrewxdfertert",
      "maxAdults" : 2,
      "maxChild" : 42,
      "maxGuests" : 3,
      "bathrooms" : 13,
      "bedrooms" : 1,
      "numberOfBeds" : 2,
      "isEditable" : true,
      "roomSize" : {
        "size" : 10,
        "unit" : "SquareMeters"
      },
      "images" : [
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
          "val" : 0
        },
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
          "val" : 1
        }
      ],
      "bedType" : {
        "txt" : "King Size",
        "val" : 3
      }
    }
  ]
},
  {
    "_id" : 2,
    "name" : "B Hotel Plaza",
    "address" : {
      "city" : "Shenzeng",
      "address" : "534 FA Street",
      "country" : "China"
    },
    "details" : {
      "starRating" : {
        "val" : 3,
        "txt" : "3 stars"
      },
      "brand" : {
        "val" : 1,
        "txt" : "Brand A"
      },
      "currency" : "USD",
      "checkIn" : "15:00",
      "checkOut" : "11:00",
      "numOfRooms" : 128
    },
    "amenities" : [
      {
        "val" : 1,
        "txt" : "Spa"
      },
      {
        "val" : 2,
        "txt" : "Kids Spa"
      },
      {
        "val" : 3,
        "txt" : "Sauna"
      },
      {
        "val" : 4,
        "txt" : "Olympic Pool"
      },
      {
        "val" : 5,
        "txt" : "Ran Bahar Size pool"
      },
      {
        "val" : 6,
        "txt" : "Angular Pool"
      },
      {
        "val" : 7,
        "txt" : "Swedish Massage"
      },
      {
        "val" : 8,
        "txt" : "Master Card"
      },
      {
        "val" : 9,
        "txt" : "Visa"
      },
      {
        "val" : 10,
        "txt" : "Diners"
      },
      {
        "val" : 11,
        "txt" : "American Express"
      }
    ],
    "description" : "this is the hotel description",
    "images" : [
      {
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      }

    ],
    "roomTypes" : [
      {
        "id" : 1,
        "name" : "Dungeon room 2",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 0,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 1,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        },
      },
      {
        "id" : 2,
        "name" : "#3 Room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 2,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : false,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 3,
        "name" : "Another 1 nice room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 4,
        "name" : "DB room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      }
    ]
  },
  {
    "_id" : 3,
    "name" : "Marriot",
    "address" : {
      "city" : "Prague",
      "address" : "223 Prague Street",
      "country" : "Czech Republic"
    },
    "details" : {
      "starRating" : {
        "val" : 5,
        "txt" : "5 stars"
      },
      "brand" : {
        "val" : 3,
        "txt" : "Brand C"
      },
      "currency" : "USD",
      "checkIn" : "15:00",
      "checkOut" : "11:00",
      "numOfRooms" : 128
    },
    "amenities" : [
      {
        "val" : 1,
        "txt" : "Spa"
      },
      {
        "val" : 2,
        "txt" : "Kids Spa"
      },
      {
        "val" : 3,
        "txt" : "Sauna"
      },
      {
        "val" : 4,
        "txt" : "Olympic Pool"
      },
      {
        "val" : 5,
        "txt" : "Ran Bahar Size pool"
      },
      {
        "val" : 6,
        "txt" : "Angular Pool"
      },
      {
        "val" : 7,
        "txt" : "Swedish Massage"
      },
      {
        "val" : 8,
        "txt" : "Master Card"
      },
      {
        "val" : 9,
        "txt" : "Visa"
      },
      {
        "val" : 10,
        "txt" : "Diners"
      },
      {
        "val" : 11,
        "txt" : "American Express"
      }
    ],
    "description" : "this is the hotel description",
    "images" : [
      {
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      }

    ],
    "roomTypes" : [
      {
        "id" : 1,
        "name" : "Dungeon room 2",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 0,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 1,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        },
      },
      {
        "id" : 2,
        "name" : "#3 Room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 2,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : false,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 3,
        "name" : "Another 1 nice room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 4,
        "name" : "DB room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      }
    ]
  },
  {
    "_id" : 4,
    "name" : "Four Seasons",
    "address" : {
      "city" : "Munich",
      "address2" : "1 Template Street",
      "country" : "Germany"
    },
    "details" : {
      "starRating" : {
        "val" : 4.5,
        "txt" : "4.5 stars"
      },
      "brand" : {
        "val" : 2,
        "txt" : "Brand B"
      },
      "currency" : "USD",
      "checkIn" : "15:00",
      "checkOut" : "11:00",
      "numOfRooms" : 98
    },
    "amenities" : [
      {
        "val" : 1,
        "txt" : "Spa"
      },
      {
        "val" : 2,
        "txt" : "Kids Spa"
      },
      {
        "val" : 3,
        "txt" : "Sauna"
      },
      {
        "val" : 4,
        "txt" : "Olympic Pool"
      },
      {
        "val" : 5,
        "txt" : "Ran Bahar Size pool"
      },
      {
        "val" : 6,
        "txt" : "Angular Pool"
      },
      {
        "val" : 7,
        "txt" : "Swedish Massage"
      },
      {
        "val" : 8,
        "txt" : "Master Card"
      },
      {
        "val" : 9,
        "txt" : "Visa"
      },
      {
        "val" : 10,
        "txt" : "Diners"
      },
      {
        "val" : 11,
        "txt" : "American Express"
      }
    ],
    "description" : "this is the hotel description",
    "images" : [
      {
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      }

    ],
    "roomTypes" : [
      {
        "id" : 1,
        "name" : "Dungeon room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 0,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 1,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        },
      },
      {
        "id" : 2,
        "name" : "#2 Room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 2,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : false,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 3,
        "name" : "Another nice room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 4,
        "name" : "D room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      }
    ]
  },
  {
    "_id" : 5,
    "name" : "Dan Panorama",
    "address" : {
      "city" : "Tel Aviv",
      "address" : "2 King Solomon Street",
      "country" : "israel"
    },
    "details" : {
      "starRating" : {
        "val" : 5,
        "txt" : "5 stars"
      },
      "brand" : {
        "val" : 3,
        "txt" : "Brand C"
      },
      "currency" : "USD",
      "checkIn" : "15:00",
      "checkOut" : "11:00",
      "numOfRooms" : 128
    },
    "amenities" : [
      {
        "val" : 1,
        "txt" : "Spa"
      },
      {
        "val" : 2,
        "txt" : "Kids Spa"
      },
      {
        "val" : 3,
        "txt" : "Sauna"
      },
      {
        "val" : 4,
        "txt" : "Olympic Pool"
      },
      {
        "val" : 5,
        "txt" : "Ran Bahar Size pool"
      },
      {
        "val" : 6,
        "txt" : "Angular Pool"
      },
      {
        "val" : 7,
        "txt" : "Swedish Massage"
      },
      {
        "val" : 8,
        "txt" : "Master Card"
      },
      {
        "val" : 9,
        "txt" : "Visa"
      },
      {
        "val" : 10,
        "txt" : "Diners"
      },
      {
        "val" : 11,
        "txt" : "American Express"
      }
    ],
    "description" : "this is the hotel description",
    "images" : [
      {
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      }

    ],
    "roomTypes" : [
      {
        "id" : 1,
        "name" : "Dungeon room 2",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 0,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 1,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        },
      },
      {
        "id" : 2,
        "name" : "#3 Room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 2,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : false,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 3,
        "name" : "Another 1 nice room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 4,
        "name" : "DB room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      }
    ]
  },
  {
    "_id" : 6,
    "name" : "Intercontinental Tokyo",
    "address" : {
      "city" : "Tokyo",
      "address" : "September street",
      "country" : "Japan"
    },
    "details" : {
      "starRating" : {
        "val" : 5,
        "txt" : "4.5 stars"
      },
      "brand" : {
        "val" : 2,
        "txt" : "Brand B"
      },
      "currency" : "USD",
      "checkIn" : "15:00",
      "checkOut" : "11:00",
      "numOfRooms" : 98
    },
    "amenities" : [
      {
        "val" : 1,
        "txt" : "Spa"
      },
      {
        "val" : 2,
        "txt" : "Kids Spa"
      },
      {
        "val" : 3,
        "txt" : "Sauna"
      },
      {
        "val" : 4,
        "txt" : "Olympic Pool"
      },
      {
        "val" : 5,
        "txt" : "Ran Bahar Size pool"
      },
      {
        "val" : 6,
        "txt" : "Angular Pool"
      },
      {
        "val" : 7,
        "txt" : "Swedish Massage"
      },
      {
        "val" : 8,
        "txt" : "Master Card"
      },
      {
        "val" : 9,
        "txt" : "Visa"
      },
      {
        "val" : 10,
        "txt" : "Diners"
      },
      {
        "val" : 11,
        "txt" : "American Express"
      }
    ],
    "description" : "this is the hotel description",
    "images" : [
      {
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      }

    ],
    "roomTypes" : [
      {
        "id" : 1,
        "name" : "Dungeon room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 0,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 1,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        },
      },
      {
        "id" : 2,
        "name" : "#2 Room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 2,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : false,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 3,
        "name" : "Another nice room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 4,
        "name" : "D room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      }
    ]
  },
  {
  "_id" : 7,
  "name" : "test hotel",
  "address" : {
    "city" : "Barcelona",
    "address" : "711 Street",
    "country" : "Spain"
  },
  "details" : {
    "starRating" : {
      "val" : 5,
      "txt" : "5 stars"
    },
    "brand" : {
      "val" : 3,
      "txt" : "Brand C"
    },
    "currency" : "USD",
    "checkIn" : "15:00",
    "checkOut" : "11:00",
    "numOfRooms" : 128
  },
  "amenities" : [
    {
      "val" : 1,
      "txt" : "Spa"
    },
    {
      "val" : 2,
      "txt" : "Kids Spa"
    },
    {
      "val" : 3,
      "txt" : "Sauna"
    },
    {
      "val" : 4,
      "txt" : "Olympic Pool"
    },
    {
      "val" : 5,
      "txt" : "Ran Bahar Size pool"
    },
    {
      "val" : 6,
      "txt" : "Angular Pool"
    },
    {
      "val" : 7,
      "txt" : "Swedish Massage"
    },
    {
      "val" : 8,
      "txt" : "Master Card"
    },
    {
      "val" : 9,
      "txt" : "Visa"
    },
    {
      "val" : 10,
      "txt" : "Diners"
    },
    {
      "val" : 11,
      "txt" : "American Express"
    }
  ],
  "description" : "this is the hotel description",
  "images" : [
    {
      "id" : 14691496,
      "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
      "name" : "80126L6018.JPG",
      "width" : 260,
      "height" : 200,
      "isThumbnail" : true
    },{
      "id" : 14691496,
      "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
      "name" : "80126L6018.JPG",
      "width" : 260,
      "height" : 200,
      "isThumbnail" : true
    },{
      "id" : 14691496,
      "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
      "name" : "80126L6018.JPG",
      "width" : 260,
      "height" : 200,
      "isThumbnail" : true
    }

  ],
  "roomTypes" : [
    {
      "id" : 1,
      "name" : "Dungeon room 2",
      "description" : "coolfrewxdfertert",
      "maxAdults" : 2,
      "maxChild" : 0,
      "maxGuests" : 3,
      "bathrooms" : 13,
      "bedrooms" : 1,
      "numberOfBeds" : 1,
      "isEditable" : true,
      "roomSize" : {
        "size" : 10,
        "unit" : "SquareMeters"
      },
      "images" : [
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
          "val" : 0
        },
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
          "val" : 1
        }
      ],
      "bedType" : {
        "txt" : "King Size",
        "val" : 3
      },
    },
    {
      "id" : 2,
      "name" : "#3 Room",
      "description" : "coolfrewxdfertert",
      "maxAdults" : 2,
      "maxChild" : 2,
      "maxGuests" : 3,
      "bathrooms" : 13,
      "bedrooms" : 1,
      "numberOfBeds" : 2,
      "isEditable" : false,
      "roomSize" : {
        "size" : 10,
        "unit" : "SquareMeters"
      },
      "images" : [
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
          "val" : 0
        },
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
          "val" : 1
        }
      ],
      "bedType" : {
        "txt" : "King Size",
        "val" : 3
      }
    },
    {
      "id" : 3,
      "name" : "Another 1 nice room",
      "description" : "coolfrewxdfertert",
      "maxAdults" : 2,
      "maxChild" : 42,
      "maxGuests" : 3,
      "bathrooms" : 13,
      "bedrooms" : 1,
      "numberOfBeds" : 2,
      "isEditable" : true,
      "roomSize" : {
        "size" : 10,
        "unit" : "SquareMeters"
      },
      "images" : [
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
          "val" : 0
        },
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
          "val" : 1
        }
      ],
      "bedType" : {
        "txt" : "King Size",
        "val" : 3
      }
    },
    {
      "id" : 4,
      "name" : "DB room",
      "description" : "coolfrewxdfertert",
      "maxAdults" : 2,
      "maxChild" : 42,
      "maxGuests" : 3,
      "bathrooms" : 13,
      "bedrooms" : 1,
      "numberOfBeds" : 2,
      "isEditable" : true,
      "roomSize" : {
        "size" : 10,
        "unit" : "SquareMeters"
      },
      "images" : [
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
          "val" : 0
        },
        {
          "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
          "val" : 1
        }
      ],
      "bedType" : {
        "txt" : "King Size",
        "val" : 3
      }
    }
  ]
},
  {
    "_id" : 8,
    "name" : "Astor On The park",
    "address" : {
      "city" : "New York",
      "address" : "Astoria Street",
      "country" : "USA"
    },
    "details" : {
      "starRating" : {
        "val" : 4.5,
        "txt" : "4.5 stars"
      },
      "brand" : {
        "val" : 2,
        "txt" : "Brand B"
      },
      "currency" : "USD",
      "checkIn" : "15:00",
      "checkOut" : "11:00",
      "numOfRooms" : 98
    },
    "amenities" : [
      {
        "val" : 1,
        "txt" : "Spa"
      },
      {
        "val" : 2,
        "txt" : "Kids Spa"
      },
      {
        "val" : 3,
        "txt" : "Sauna"
      },
      {
        "val" : 4,
        "txt" : "Olympic Pool"
      },
      {
        "val" : 5,
        "txt" : "Ran Bahar Size pool"
      },
      {
        "val" : 6,
        "txt" : "Angular Pool"
      },
      {
        "val" : 7,
        "txt" : "Swedish Massage"
      },
      {
        "val" : 8,
        "txt" : "Master Card"
      },
      {
        "val" : 9,
        "txt" : "Visa"
      },
      {
        "val" : 10,
        "txt" : "Diners"
      },
      {
        "val" : 11,
        "txt" : "American Express"
      }
    ],
    "description" : "this is the hotel description",
    "images" : [
      {
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      }

    ],
    "roomTypes" : [
      {
        "id" : 1,
        "name" : "Dungeon room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 0,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 1,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        },
      },
      {
        "id" : 2,
        "name" : "#2 Room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 2,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : false,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 3,
        "name" : "Another nice room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 4,
        "name" : "D room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      }
    ]
  },
  {
    "_id" : 9,
    "name" : "Clarion INN",
    "address" : {
      "city" : "Orlando",
      "address" : "E parkway 212",
      "country" : "USA"
    },
    "details" : {
      "starRating" : {
        "val" : 4.5,
        "txt" : "4.5 stars"
      },
      "brand" : {
        "val" : 2,
        "txt" : "Brand B"
      },
      "currency" : "USD",
      "checkIn" : "15:00",
      "checkOut" : "11:00",
      "numOfRooms" : 98
    },
    "amenities" : [
      {
        "val" : 1,
        "txt" : "Spa"
      },
      {
        "val" : 2,
        "txt" : "Kids Spa"
      },
      {
        "val" : 3,
        "txt" : "Sauna"
      },
      {
        "val" : 4,
        "txt" : "Olympic Pool"
      },
      {
        "val" : 5,
        "txt" : "Ran Bahar Size pool"
      },
      {
        "val" : 6,
        "txt" : "Angular Pool"
      },
      {
        "val" : 7,
        "txt" : "Swedish Massage"
      },
      {
        "val" : 8,
        "txt" : "Master Card"
      },
      {
        "val" : 9,
        "txt" : "Visa"
      },
      {
        "val" : 10,
        "txt" : "Diners"
      },
      {
        "val" : 11,
        "txt" : "American Express"
      }
    ],
    "description" : "this is the hotel description",
    "images" : [
      {
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      }

    ],
    "roomTypes" : [
      {
        "id" : 1,
        "name" : "Dungeon room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 0,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 1,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        },
      },
      {
        "id" : 2,
        "name" : "#2 Room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 2,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : false,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 3,
        "name" : "Another nice room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 4,
        "name" : "D room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      }
    ]
  },
  {
    "_id" : 10,
    "name" : "Ritz Carlton Sao Paulo",
    "address" : {
      "city" : "Sao Paulo",
      "address" : "A Street",
      "country" : "Brazil"
    },
    "details" : {
      "starRating" : {
        "val" : 3,
        "txt" : "3 stars"
      },
      "brand" : {
        "val" : 1,
        "txt" : "Brand A"
      },
      "currency" : "USD",
      "checkIn" : "15:00",
      "checkOut" : "11:00",
      "numOfRooms" : 128
    },
    "amenities" : [
      {
        "val" : 1,
        "txt" : "Spa"
      },
      {
        "val" : 2,
        "txt" : "Kids Spa"
      },
      {
        "val" : 3,
        "txt" : "Sauna"
      },
      {
        "val" : 4,
        "txt" : "Olympic Pool"
      },
      {
        "val" : 5,
        "txt" : "Ran Bahar Size pool"
      },
      {
        "val" : 6,
        "txt" : "Angular Pool"
      },
      {
        "val" : 7,
        "txt" : "Swedish Massage"
      },
      {
        "val" : 8,
        "txt" : "Master Card"
      },
      {
        "val" : 9,
        "txt" : "Visa"
      },
      {
        "val" : 10,
        "txt" : "Diners"
      },
      {
        "val" : 11,
        "txt" : "American Express"
      }
    ],
    "description" : "this is the hotel description",
    "images" : [
      {
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      },{
        "id" : 14691496,
        "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
        "name" : "80126L6018.JPG",
        "width" : 260,
        "height" : 200,
        "isThumbnail" : true
      }

    ],
    "roomTypes" : [
      {
        "id" : 1,
        "name" : "Dungeon room 2",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 0,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 1,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        },
      },
      {
        "id" : 2,
        "name" : "#3 Room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 2,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : false,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 3,
        "name" : "Another 1 nice room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      },
      {
        "id" : 4,
        "name" : "DB room",
        "description" : "coolfrewxdfertert",
        "maxAdults" : 2,
        "maxChild" : 42,
        "maxGuests" : 3,
        "bathrooms" : 13,
        "bedrooms" : 1,
        "numberOfBeds" : 2,
        "isEditable" : true,
        "roomSize" : {
          "size" : 10,
          "unit" : "SquareMeters"
        },
        "images" : [
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
            "val" : 0
          },
          {
            "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
            "val" : 1
          }
        ],
        "bedType" : {
          "txt" : "King Size",
          "val" : 3
        }
      }
    ]
  }
];
brands:any;

  constructor() {
    // this.hotels = 
      [
        {
        "_id" : 1,
        "name" : "A Hotel Leonardo",
        "address" : {
          "city" : "Munich",
          "address" : "19 ABCV Street",
          "country" : "Germany"
        },
        "details" : {
          "starRating" : {
            "val" : 4.5,
            "txt" : "4.5 stars"
          },
          "brand" : {
            "val" : 2,
            "txt" : "Brand B"
          },
          "currency" : "USD",
          "checkIn" : "15:00",
          "checkOut" : "11:00",
          "numOfRooms" : 98
        },
        "amenities" : [
              {
                "val" : 1,
                "txt" : "Spa"
              },
              {
                "val" : 2,
                "txt" : "Kids Spa"
              },
              {
                "val" : 3,
                "txt" : "Sauna"
              },
              {
                "val" : 4,
                "txt" : "Olympic Pool"
              },
              {
                "val" : 5,
                "txt" : "Ran Bahar Size pool"
              },
              {
                "val" : 6,
                "txt" : "Angular Pool"
              },
              {
                "val" : 7,
                "txt" : "Swedish Massage"
              },
              {
                "val" : 8,
                "txt" : "Master Card"
              },
              {
                "val" : 9,
                "txt" : "Visa"
              },
              {
                "val" : 10,
                "txt" : "Diners"
              },
              {
                "val" : 11,
                "txt" : "American Express"
              }
        ],
        "description" : "this is the hotel description",
        "images" : [
          {
            "id" : 14691496,
            "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
            "name" : "80126L6018.JPG",
            "width" : 260,
            "height" : 200,
            "isThumbnail" : true
          },{
            "id" : 14691496,
            "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
            "name" : "80126L6018.JPG",
            "width" : 260,
            "height" : 200,
            "isThumbnail" : true
          },{
            "id" : 14691496,
            "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
            "name" : "80126L6018.JPG",
            "width" : 260,
            "height" : 200,
            "isThumbnail" : true
          }
      
        ],
        "roomTypes" : [
          {
            "id" : 1,
            "name" : "Dungeon room",
            "description" : "coolfrewxdfertert",
            "maxAdults" : 2,
            "maxChild" : 0,
            "maxGuests" : 3,
            "bathrooms" : 13,
            "bedrooms" : 1,
            "numberOfBeds" : 1,
            "isEditable" : true,
            "roomSize" : {
              "size" : 10,
              "unit" : "SquareMeters"
            },
            "images" : [
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                "val" : 0
              },
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                "val" : 1
              }
            ],
            "bedType" : {
              "txt" : "King Size",
              "val" : 3
            },
          },
          {
            "id" : 2,
            "name" : "#2 Room",
            "description" : "coolfrewxdfertert",
            "maxAdults" : 2,
            "maxChild" : 2,
            "maxGuests" : 3,
            "bathrooms" : 13,
            "bedrooms" : 1,
            "numberOfBeds" : 2,
            "isEditable" : false,
            "roomSize" : {
              "size" : 10,
              "unit" : "SquareMeters"
            },
            "images" : [
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                "val" : 0
              },
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                "val" : 1
              }
            ],
            "bedType" : {
              "txt" : "King Size",
              "val" : 3
            }
          },
          {
            "id" : 3,
            "name" : "Another nice room",
            "description" : "coolfrewxdfertert",
            "maxAdults" : 2,
            "maxChild" : 42,
            "maxGuests" : 3,
            "bathrooms" : 13,
            "bedrooms" : 1,
            "numberOfBeds" : 2,
            "isEditable" : true,
            "roomSize" : {
              "size" : 10,
              "unit" : "SquareMeters"
            },
            "images" : [
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                "val" : 0
              },
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                "val" : 1
              }
            ],
            "bedType" : {
              "txt" : "King Size",
              "val" : 3
            }
          },
          {
            "id" : 4,
            "name" : "D room",
            "description" : "coolfrewxdfertert",
            "maxAdults" : 2,
            "maxChild" : 42,
            "maxGuests" : 3,
            "bathrooms" : 13,
            "bedrooms" : 1,
            "numberOfBeds" : 2,
            "isEditable" : true,
            "roomSize" : {
              "size" : 10,
              "unit" : "SquareMeters"
            },
            "images" : [
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                "val" : 0
              },
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                "val" : 1
              }
            ],
            "bedType" : {
              "txt" : "King Size",
              "val" : 3
            }
          }
        ]
      },
        {
          "_id" : 2,
          "name" : "B Hotel Plaza",
          "address" : {
            "city" : "Shenzeng",
            "address" : "534 FA Street",
            "country" : "China"
          },
          "details" : {
            "starRating" : {
              "val" : 3,
              "txt" : "3 stars"
            },
            "brand" : {
              "val" : 1,
              "txt" : "Brand A"
            },
            "currency" : "USD",
            "checkIn" : "15:00",
            "checkOut" : "11:00",
            "numOfRooms" : 128
          },
          "amenities" : [
            {
              "val" : 1,
              "txt" : "Spa"
            },
            {
              "val" : 2,
              "txt" : "Kids Spa"
            },
            {
              "val" : 3,
              "txt" : "Sauna"
            },
            {
              "val" : 4,
              "txt" : "Olympic Pool"
            },
            {
              "val" : 5,
              "txt" : "Ran Bahar Size pool"
            },
            {
              "val" : 6,
              "txt" : "Angular Pool"
            },
            {
              "val" : 7,
              "txt" : "Swedish Massage"
            },
            {
              "val" : 8,
              "txt" : "Master Card"
            },
            {
              "val" : 9,
              "txt" : "Visa"
            },
            {
              "val" : 10,
              "txt" : "Diners"
            },
            {
              "val" : 11,
              "txt" : "American Express"
            }
          ],
          "description" : "this is the hotel description",
          "images" : [
            {
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            }
      
          ],
          "roomTypes" : [
            {
              "id" : 1,
              "name" : "Dungeon room 2",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 0,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 1,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              },
            },
            {
              "id" : 2,
              "name" : "#3 Room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 2,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : false,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 3,
              "name" : "Another 1 nice room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 4,
              "name" : "DB room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            }
          ]
        },
        {
          "_id" : 3,
          "name" : "Marriot",
          "address" : {
            "city" : "Prague",
            "address" : "223 Prague Street",
            "country" : "Czech Republic"
          },
          "details" : {
            "starRating" : {
              "val" : 5,
              "txt" : "5 stars"
            },
            "brand" : {
              "val" : 3,
              "txt" : "Brand C"
            },
            "currency" : "USD",
            "checkIn" : "15:00",
            "checkOut" : "11:00",
            "numOfRooms" : 128
          },
          "amenities" : [
            {
              "val" : 1,
              "txt" : "Spa"
            },
            {
              "val" : 2,
              "txt" : "Kids Spa"
            },
            {
              "val" : 3,
              "txt" : "Sauna"
            },
            {
              "val" : 4,
              "txt" : "Olympic Pool"
            },
            {
              "val" : 5,
              "txt" : "Ran Bahar Size pool"
            },
            {
              "val" : 6,
              "txt" : "Angular Pool"
            },
            {
              "val" : 7,
              "txt" : "Swedish Massage"
            },
            {
              "val" : 8,
              "txt" : "Master Card"
            },
            {
              "val" : 9,
              "txt" : "Visa"
            },
            {
              "val" : 10,
              "txt" : "Diners"
            },
            {
              "val" : 11,
              "txt" : "American Express"
            }
          ],
          "description" : "this is the hotel description",
          "images" : [
            {
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            }
      
          ],
          "roomTypes" : [
            {
              "id" : 1,
              "name" : "Dungeon room 2",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 0,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 1,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              },
            },
            {
              "id" : 2,
              "name" : "#3 Room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 2,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : false,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 3,
              "name" : "Another 1 nice room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 4,
              "name" : "DB room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            }
          ]
        },
        {
          "_id" : 4,
          "name" : "Four Seasons",
          "address" : {
            "city" : "Munich",
            "address2" : "1 Template Street",
            "country" : "Germany"
          },
          "details" : {
            "starRating" : {
              "val" : 4.5,
              "txt" : "4.5 stars"
            },
            "brand" : {
              "val" : 2,
              "txt" : "Brand B"
            },
            "currency" : "USD",
            "checkIn" : "15:00",
            "checkOut" : "11:00",
            "numOfRooms" : 98
          },
          "amenities" : [
            {
              "val" : 1,
              "txt" : "Spa"
            },
            {
              "val" : 2,
              "txt" : "Kids Spa"
            },
            {
              "val" : 3,
              "txt" : "Sauna"
            },
            {
              "val" : 4,
              "txt" : "Olympic Pool"
            },
            {
              "val" : 5,
              "txt" : "Ran Bahar Size pool"
            },
            {
              "val" : 6,
              "txt" : "Angular Pool"
            },
            {
              "val" : 7,
              "txt" : "Swedish Massage"
            },
            {
              "val" : 8,
              "txt" : "Master Card"
            },
            {
              "val" : 9,
              "txt" : "Visa"
            },
            {
              "val" : 10,
              "txt" : "Diners"
            },
            {
              "val" : 11,
              "txt" : "American Express"
            }
          ],
          "description" : "this is the hotel description",
          "images" : [
            {
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            }
      
          ],
          "roomTypes" : [
            {
              "id" : 1,
              "name" : "Dungeon room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 0,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 1,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              },
            },
            {
              "id" : 2,
              "name" : "#2 Room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 2,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : false,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 3,
              "name" : "Another nice room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 4,
              "name" : "D room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            }
          ]
        },
        {
          "_id" : 5,
          "name" : "Dan Panorama",
          "address" : {
            "city" : "Tel Aviv",
            "address" : "2 King Solomon Street",
            "country" : "israel"
          },
          "details" : {
            "starRating" : {
              "val" : 5,
              "txt" : "5 stars"
            },
            "brand" : {
              "val" : 3,
              "txt" : "Brand C"
            },
            "currency" : "USD",
            "checkIn" : "15:00",
            "checkOut" : "11:00",
            "numOfRooms" : 128
          },
          "amenities" : [
            {
              "val" : 1,
              "txt" : "Spa"
            },
            {
              "val" : 2,
              "txt" : "Kids Spa"
            },
            {
              "val" : 3,
              "txt" : "Sauna"
            },
            {
              "val" : 4,
              "txt" : "Olympic Pool"
            },
            {
              "val" : 5,
              "txt" : "Ran Bahar Size pool"
            },
            {
              "val" : 6,
              "txt" : "Angular Pool"
            },
            {
              "val" : 7,
              "txt" : "Swedish Massage"
            },
            {
              "val" : 8,
              "txt" : "Master Card"
            },
            {
              "val" : 9,
              "txt" : "Visa"
            },
            {
              "val" : 10,
              "txt" : "Diners"
            },
            {
              "val" : 11,
              "txt" : "American Express"
            }
          ],
          "description" : "this is the hotel description",
          "images" : [
            {
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            }
      
          ],
          "roomTypes" : [
            {
              "id" : 1,
              "name" : "Dungeon room 2",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 0,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 1,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              },
            },
            {
              "id" : 2,
              "name" : "#3 Room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 2,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : false,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 3,
              "name" : "Another 1 nice room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 4,
              "name" : "DB room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            }
          ]
        },
        {
          "_id" : 6,
          "name" : "Intercontinental Tokyo",
          "address" : {
            "city" : "Tokyo",
            "address" : "September street",
            "country" : "Japan"
          },
          "details" : {
            "starRating" : {
              "val" : 5,
              "txt" : "4.5 stars"
            },
            "brand" : {
              "val" : 2,
              "txt" : "Brand B"
            },
            "currency" : "USD",
            "checkIn" : "15:00",
            "checkOut" : "11:00",
            "numOfRooms" : 98
          },
          "amenities" : [
            {
              "val" : 1,
              "txt" : "Spa"
            },
            {
              "val" : 2,
              "txt" : "Kids Spa"
            },
            {
              "val" : 3,
              "txt" : "Sauna"
            },
            {
              "val" : 4,
              "txt" : "Olympic Pool"
            },
            {
              "val" : 5,
              "txt" : "Ran Bahar Size pool"
            },
            {
              "val" : 6,
              "txt" : "Angular Pool"
            },
            {
              "val" : 7,
              "txt" : "Swedish Massage"
            },
            {
              "val" : 8,
              "txt" : "Master Card"
            },
            {
              "val" : 9,
              "txt" : "Visa"
            },
            {
              "val" : 10,
              "txt" : "Diners"
            },
            {
              "val" : 11,
              "txt" : "American Express"
            }
          ],
          "description" : "this is the hotel description",
          "images" : [
            {
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            }
      
          ],
          "roomTypes" : [
            {
              "id" : 1,
              "name" : "Dungeon room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 0,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 1,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              },
            },
            {
              "id" : 2,
              "name" : "#2 Room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 2,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : false,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 3,
              "name" : "Another nice room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 4,
              "name" : "D room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            }
          ]
        },
        {
        "_id" : 7,
        "name" : "test hotel",
        "address" : {
          "city" : "Barcelona",
          "address" : "711 Street",
          "country" : "Spain"
        },
        "details" : {
          "starRating" : {
            "val" : 5,
            "txt" : "5 stars"
          },
          "brand" : {
            "val" : 3,
            "txt" : "Brand C"
          },
          "currency" : "USD",
          "checkIn" : "15:00",
          "checkOut" : "11:00",
          "numOfRooms" : 128
        },
        "amenities" : [
          {
            "val" : 1,
            "txt" : "Spa"
          },
          {
            "val" : 2,
            "txt" : "Kids Spa"
          },
          {
            "val" : 3,
            "txt" : "Sauna"
          },
          {
            "val" : 4,
            "txt" : "Olympic Pool"
          },
          {
            "val" : 5,
            "txt" : "Ran Bahar Size pool"
          },
          {
            "val" : 6,
            "txt" : "Angular Pool"
          },
          {
            "val" : 7,
            "txt" : "Swedish Massage"
          },
          {
            "val" : 8,
            "txt" : "Master Card"
          },
          {
            "val" : 9,
            "txt" : "Visa"
          },
          {
            "val" : 10,
            "txt" : "Diners"
          },
          {
            "val" : 11,
            "txt" : "American Express"
          }
        ],
        "description" : "this is the hotel description",
        "images" : [
          {
            "id" : 14691496,
            "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
            "name" : "80126L6018.JPG",
            "width" : 260,
            "height" : 200,
            "isThumbnail" : true
          },{
            "id" : 14691496,
            "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
            "name" : "80126L6018.JPG",
            "width" : 260,
            "height" : 200,
            "isThumbnail" : true
          },{
            "id" : 14691496,
            "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
            "name" : "80126L6018.JPG",
            "width" : 260,
            "height" : 200,
            "isThumbnail" : true
          }
      
        ],
        "roomTypes" : [
          {
            "id" : 1,
            "name" : "Dungeon room 2",
            "description" : "coolfrewxdfertert",
            "maxAdults" : 2,
            "maxChild" : 0,
            "maxGuests" : 3,
            "bathrooms" : 13,
            "bedrooms" : 1,
            "numberOfBeds" : 1,
            "isEditable" : true,
            "roomSize" : {
              "size" : 10,
              "unit" : "SquareMeters"
            },
            "images" : [
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                "val" : 0
              },
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                "val" : 1
              }
            ],
            "bedType" : {
              "txt" : "King Size",
              "val" : 3
            },
          },
          {
            "id" : 2,
            "name" : "#3 Room",
            "description" : "coolfrewxdfertert",
            "maxAdults" : 2,
            "maxChild" : 2,
            "maxGuests" : 3,
            "bathrooms" : 13,
            "bedrooms" : 1,
            "numberOfBeds" : 2,
            "isEditable" : false,
            "roomSize" : {
              "size" : 10,
              "unit" : "SquareMeters"
            },
            "images" : [
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                "val" : 0
              },
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                "val" : 1
              }
            ],
            "bedType" : {
              "txt" : "King Size",
              "val" : 3
            }
          },
          {
            "id" : 3,
            "name" : "Another 1 nice room",
            "description" : "coolfrewxdfertert",
            "maxAdults" : 2,
            "maxChild" : 42,
            "maxGuests" : 3,
            "bathrooms" : 13,
            "bedrooms" : 1,
            "numberOfBeds" : 2,
            "isEditable" : true,
            "roomSize" : {
              "size" : 10,
              "unit" : "SquareMeters"
            },
            "images" : [
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                "val" : 0
              },
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                "val" : 1
              }
            ],
            "bedType" : {
              "txt" : "King Size",
              "val" : 3
            }
          },
          {
            "id" : 4,
            "name" : "DB room",
            "description" : "coolfrewxdfertert",
            "maxAdults" : 2,
            "maxChild" : 42,
            "maxGuests" : 3,
            "bathrooms" : 13,
            "bedrooms" : 1,
            "numberOfBeds" : 2,
            "isEditable" : true,
            "roomSize" : {
              "size" : 10,
              "unit" : "SquareMeters"
            },
            "images" : [
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                "val" : 0
              },
              {
                "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                "val" : 1
              }
            ],
            "bedType" : {
              "txt" : "King Size",
              "val" : 3
            }
          }
        ]
      },
        {
          "_id" : 8,
          "name" : "Astor On The park",
          "address" : {
            "city" : "New York",
            "address" : "Astoria Street",
            "country" : "USA"
          },
          "details" : {
            "starRating" : {
              "val" : 4.5,
              "txt" : "4.5 stars"
            },
            "brand" : {
              "val" : 2,
              "txt" : "Brand B"
            },
            "currency" : "USD",
            "checkIn" : "15:00",
            "checkOut" : "11:00",
            "numOfRooms" : 98
          },
          "amenities" : [
            {
              "val" : 1,
              "txt" : "Spa"
            },
            {
              "val" : 2,
              "txt" : "Kids Spa"
            },
            {
              "val" : 3,
              "txt" : "Sauna"
            },
            {
              "val" : 4,
              "txt" : "Olympic Pool"
            },
            {
              "val" : 5,
              "txt" : "Ran Bahar Size pool"
            },
            {
              "val" : 6,
              "txt" : "Angular Pool"
            },
            {
              "val" : 7,
              "txt" : "Swedish Massage"
            },
            {
              "val" : 8,
              "txt" : "Master Card"
            },
            {
              "val" : 9,
              "txt" : "Visa"
            },
            {
              "val" : 10,
              "txt" : "Diners"
            },
            {
              "val" : 11,
              "txt" : "American Express"
            }
          ],
          "description" : "this is the hotel description",
          "images" : [
            {
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            }
      
          ],
          "roomTypes" : [
            {
              "id" : 1,
              "name" : "Dungeon room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 0,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 1,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              },
            },
            {
              "id" : 2,
              "name" : "#2 Room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 2,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : false,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 3,
              "name" : "Another nice room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 4,
              "name" : "D room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            }
          ]
        },
        {
          "_id" : 9,
          "name" : "Clarion INN",
          "address" : {
            "city" : "Orlando",
            "address" : "E parkway 212",
            "country" : "USA"
          },
          "details" : {
            "starRating" : {
              "val" : 4.5,
              "txt" : "4.5 stars"
            },
            "brand" : {
              "val" : 2,
              "txt" : "Brand B"
            },
            "currency" : "USD",
            "checkIn" : "15:00",
            "checkOut" : "11:00",
            "numOfRooms" : 98
          },
          "amenities" : [
            {
              "val" : 1,
              "txt" : "Spa"
            },
            {
              "val" : 2,
              "txt" : "Kids Spa"
            },
            {
              "val" : 3,
              "txt" : "Sauna"
            },
            {
              "val" : 4,
              "txt" : "Olympic Pool"
            },
            {
              "val" : 5,
              "txt" : "Ran Bahar Size pool"
            },
            {
              "val" : 6,
              "txt" : "Angular Pool"
            },
            {
              "val" : 7,
              "txt" : "Swedish Massage"
            },
            {
              "val" : 8,
              "txt" : "Master Card"
            },
            {
              "val" : 9,
              "txt" : "Visa"
            },
            {
              "val" : 10,
              "txt" : "Diners"
            },
            {
              "val" : 11,
              "txt" : "American Express"
            }
          ],
          "description" : "this is the hotel description",
          "images" : [
            {
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            }
      
          ],
          "roomTypes" : [
            {
              "id" : 1,
              "name" : "Dungeon room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 0,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 1,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              },
            },
            {
              "id" : 2,
              "name" : "#2 Room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 2,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : false,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 3,
              "name" : "Another nice room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 4,
              "name" : "D room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            }
          ]
        },
        {
          "_id" : 10,
          "name" : "Ritz Carlton Sao Paulo",
          "address" : {
            "city" : "Sao Paulo",
            "address" : "A Street",
            "country" : "Brazil"
          },
          "details" : {
            "starRating" : {
              "val" : 3,
              "txt" : "3 stars"
            },
            "brand" : {
              "val" : 1,
              "txt" : "Brand A"
            },
            "currency" : "USD",
            "checkIn" : "15:00",
            "checkOut" : "11:00",
            "numOfRooms" : 128
          },
          "amenities" : [
            {
              "val" : 1,
              "txt" : "Spa"
            },
            {
              "val" : 2,
              "txt" : "Kids Spa"
            },
            {
              "val" : 3,
              "txt" : "Sauna"
            },
            {
              "val" : 4,
              "txt" : "Olympic Pool"
            },
            {
              "val" : 5,
              "txt" : "Ran Bahar Size pool"
            },
            {
              "val" : 6,
              "txt" : "Angular Pool"
            },
            {
              "val" : 7,
              "txt" : "Swedish Massage"
            },
            {
              "val" : 8,
              "txt" : "Master Card"
            },
            {
              "val" : 9,
              "txt" : "Visa"
            },
            {
              "val" : 10,
              "txt" : "Diners"
            },
            {
              "val" : 11,
              "txt" : "American Express"
            }
          ],
          "description" : "this is the hotel description",
          "images" : [
            {
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/3.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/1.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            },{
              "id" : 14691496,
              "url" : "http://image2.urlforimages.com/TipaImages/404/images/4.jpg",
              "name" : "80126L6018.JPG",
              "width" : 260,
              "height" : 200,
              "isThumbnail" : true
            }
      
          ],
          "roomTypes" : [
            {
              "id" : 1,
              "name" : "Dungeon room 2",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 0,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 1,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              },
            },
            {
              "id" : 2,
              "name" : "#3 Room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 2,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : false,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 3,
              "name" : "Another 1 nice room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            },
            {
              "id" : 4,
              "name" : "DB room",
              "description" : "coolfrewxdfertert",
              "maxAdults" : 2,
              "maxChild" : 42,
              "maxGuests" : 3,
              "bathrooms" : 13,
              "bedrooms" : 1,
              "numberOfBeds" : 2,
              "isEditable" : true,
              "roomSize" : {
                "size" : 10,
                "unit" : "SquareMeters"
              },
              "images" : [
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/5.jpg",
                  "val" : 0
                },
                {
                  "txt" : "http://image2.urlforimages.com/TipaImages/404/images/7.jpg",
                  "val" : 1
                }
              ],
              "bedType" : {
                "txt" : "King Size",
                "val" : 3
              }
            }
          ]
        }
      ]
   }

   getHotel(name){
    return this.hotels.find((item) => {
      if(item.name === name){
       return item;
      }
     });
    }


}
