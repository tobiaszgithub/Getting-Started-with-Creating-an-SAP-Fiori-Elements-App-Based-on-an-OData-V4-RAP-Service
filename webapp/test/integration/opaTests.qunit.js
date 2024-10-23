sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'travels/test/integration/FirstJourney',
		'travels/test/integration/pages/TravelList',
		'travels/test/integration/pages/TravelObjectPage',
		'travels/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('travels') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);