const inputJson = {
	"endDate": "2021-04-30T23:59:59",
	"customerDecision": {
		"id": 3,
		"desc": "Save Proposal"
	},
	"insuredObjects": [
		{
			"mortgageFlag": false,
			"asset": {
				"@type": "interfaces:VehicleIVO",
				"modelId": 1017519,
				"jeepFlag": false,
				"buyingPriceCurrencyVO": {
					"id": 1000001,
					"desc": "Danish Krone"
				},
				"winterDriving": false,
				"regularDriverFlag": 1,
				"convertableFlag": false,
				"riskObjectTypeGFVO": {
					"id": 1000023,
					"desc": "Car"
				},
				"assetAdditionalData": [],
				"model": "-",
				"photoDocumentationReceived": false,
				"manufactureVO": {
					"id": 1000022,
					"desc": "BMW"
				},
				"customerTypeGFVO": {
					"id": 1000001,
					"desc": "Private"
				},
				"assetRiskVOs": [],
				"geographyGFVO": {
					"id": 1000001,
					"desc": "Denmark"
				},
				"vehicleDriverVOs": [
					{
						"mainDriverFlag": true,
						"useFutureAddressFlag": true,
						"futureAddressIVO": {
							"zipCode": "1010",
							"cityVO": {
								"id": 1,
								"desc": "Copenhagen"
							},
							"countryVO": {
								"id": 55,
								"desc": "Denmark"
							},
							"streetName": "Maskavas str",
							"cityName": "Copenhagen",
							"houseNr": "409"
						},
						"driverAge": 58,
						"id": 20082,
						"relatedContactRoleGFVO": {
							"id": 1000001,
							"desc": "Driver"
						},
						"driverExtNum": "21216"
					},
					{
						"mainDriverFlag": false,
						"useFutureAddressFlag": true,
						"futureAddressIVO": {
							"zipCode": "1010",
							"cityVO": {
								"id": 1,
								"desc": "Copenhagen"
							},
							"countryVO": {
								"id": 55,
								"desc": "Denmark"
							},
							"streetName": "Maskavas str",
							"cityName": "Copenhagen",
							"houseNr": "409"
						},
						"driverAge": 58,
						"relatedContactRoleGFVO": {
							"id": 1000002,
							"desc": "Owner"
						},
						"driverExtNum": "21216"
					}
				],
				"yearOfRegistration": 2005,
				"claims3YearsGFVO": {
					"id": 1000001,
					"desc": "0"
				},
				"previousClaimsFlag": {
					"id": 0,
					"desc": "No"
				},
				"vintage": false,
				"assetTypeVO": {
					"id": 3,
					"desc": "Motor"
				},
				"assetIdentifierIVOs": [
					{
						"assetIdentifierTypeVO": {
							"id": 10002,
							"desc": "VIN"
						},
						"id": 20137,
						"value": "WAUBGAFL1CA070808"
					}
				],
				"leased": false,
				"mileageGFVO": {
					"id": 1000004,
					"desc": "20 000"
				},
				"claimHistoryVOs": [],
				"assetBeneficiaryVOs": [],
				"antiTheftExists": false,
				"excludingVatFlag": false,
				"isCarCamera": false,
				"unregistrationReasonGFVO": {
					"id": 1000001,
					"desc": "Pending Registration"
				},
				"kw": "150.00",
				"yearsYoungDriverCoverGFVO": {
					"id": 1000001,
					"desc": "0"
				},
				"mortgageVO": [],
				"modelVO": {
					"id": 1017519,
					"desc": "-"
				},
				"yearsInsuranceGFVO": {
					"id": 1000001,
					"desc": "0"
				},
				"registrationDate": "2020-01-01T00:00:00",
				"manufactureId": 1000022,
				"totalAccessoriesValue": "0.00",
				"assetDescription": "BMW X5                        ",
				"powerValue": "180.00000000",
				"manufacture": "BMW",
				"insuredSumCurrencyVO": {
					"id": 1000001,
					"desc": "Danish Krone"
				},
				"assetItemVOs": [],
				"assetVehicleRiskParametersGFIVO": {
					"id": 20018,
					"ageOfPolicyholder": 58,
					"vehicleAge": 0
				},
				"mainModelVO": {
					"id": 1000258,
					"desc": "X5                       "
				},
				"newValueCurrencyVO": {
					"id": 1000001,
					"desc": "Danish Krone"
				},
				"mainDriverTypeVO": {
					"id": 2,
					"desc": "Multiple Named Drivers"
				},
				"vehicleValue": "0.00",
				"unregistered": true,
				"mortgageFlag": 0,
				"sportsFlag": false,
				"vehicleTypeGFVO": {
					"id": 1000001,
					"desc": "Car"
				}
			},
			"lob": {
				"id": 4,
				"desc": "Motorcar"
			},
			"assetType": {
				"id": 3,
				"desc": "Motor"
			},
			"status": {
				"id": 10,
				"desc": "Proposal"
			},
			"covers": [
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "2166.54",
					"productLineType": 1,
					"productLineGroup": 1000220,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "2.16",
					"excessAmount": "0.00",
					"coverOptionName": "MTPL",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000200,
						"desc": "MTPL"
					},
					"premiumForColl": "2168.70",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "MTPL",
							"id": 1000200
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "8666.16",
					"productLineType": 1,
					"productLineGroup": 1000225,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "8.64",
					"excessAmount": "4132.04",
					"coverOptionName": "Comprehensive",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000205,
						"desc": "Comprehensive"
					},
					"premiumForColl": "8674.80",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Comprehensive",
							"id": 1000205
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 2,
					"productLineGroup": 1000215,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "0.00",
					"coverOptionName": "Driver accident",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000195,
						"desc": "Driver accident"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Driver accident",
							"id": 1000195
						}
					],
					"included": false,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 2,
					"productLineGroup": 1000217,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "0.00",
					"coverOptionName": "Road Assistance",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000197,
						"desc": "Road Assistance"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Road Assistance",
							"id": 1000197
						}
					],
					"included": false,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "150.00",
					"productLineType": 5,
					"productLineGroup": 1000291,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "0.00",
					"excessAmount": "0.00",
					"coverOptionName": "Guarantee",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000271,
						"desc": "Guarantee"
					},
					"premiumForColl": "150.00",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Guarantee",
							"id": 1000271
						}
					],
					"included": false,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "45.00",
					"productLineType": 2,
					"productLineGroup": 1000292,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "0.00",
					"excessAmount": "0.00",
					"coverOptionName": "Policy Fee",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000272,
						"desc": "Policy Fee"
					},
					"premiumForColl": "45.00",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Policy Fee",
							"id": 1000272
						}
					],
					"included": false,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "25000000.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 1,
					"productLineGroup": 1000198,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "0.00",
					"coverOptionName": "Property",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000178,
						"desc": "Property"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Property",
							"id": 1000178
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "124000000.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 1,
					"productLineGroup": 1000197,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "0.00",
					"coverOptionName": "Bodily Injury",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000177,
						"desc": "Bodily Injury"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 20,
							"description": "Bodily Injury",
							"id": 1000177
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 1,
					"productLineGroup": 1000201,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "4132.04",
					"coverOptionName": "Fire",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000181,
						"desc": "Fire"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Fire",
							"id": 1000181
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 1,
					"productLineGroup": 1000207,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "4132.04",
					"coverOptionName": "Theft",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000187,
						"desc": "Theft"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Theft",
							"id": 1000187
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 1,
					"productLineGroup": 1000204,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "4132.04",
					"coverOptionName": "Collision",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000184,
						"desc": "Collision"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Collision",
							"id": 1000184
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 1,
					"productLineGroup": 1000226,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "4132.04",
					"coverOptionName": "Parking",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000206,
						"desc": "Parking"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Parking",
							"id": 1000206
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "50000.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 1,
					"productLineGroup": 1000212,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "4132.04",
					"coverOptionName": "Extra equipment",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000192,
						"desc": "Extra equipment"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Extra equipment",
							"id": 1000192
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 1,
					"productLineGroup": 1000295,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "0.00",
					"coverOptionName": "Glass",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000277,
						"desc": "Glass"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Glass",
							"id": 1000277
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "195000.00",
					"cost": "0.00",
					"netPremiumForColl": "0.00",
					"productLineType": 1,
					"productLineGroup": 1000241,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "0.00",
					"excessAmount": "0.00",
					"coverOptionName": "Legal Aid",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000221,
						"desc": "Legal Aid"
					},
					"premiumForColl": "0.00",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Legal Aid",
							"id": 1000221
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "0.00",
					"productLineType": 1,
					"productLineGroup": 1000244,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "0.00",
					"excessAmount": "0.00",
					"coverOptionName": "Rescue",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000224,
						"desc": "Rescue"
					},
					"premiumForColl": "0.00",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Rescue",
							"id": 1000224
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 1,
					"productLineGroup": 1000208,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "0.00",
					"coverOptionName": "Impairment",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000188,
						"desc": "Impairment"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Impairment",
							"id": 1000188
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "1083.27",
					"productLineType": 1,
					"productLineGroup": 1000209,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "1.08",
					"excessAmount": "4132.04",
					"coverOptionName": "Other",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000189,
						"desc": "Other"
					},
					"premiumForColl": "1084.35",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Other",
							"id": 1000189
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "0.00",
					"productLineType": 1,
					"productLineGroup": 1000228,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "0.00",
					"excessAmount": "4132.04",
					"coverOptionName": "Collision with Animals",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000208,
						"desc": "Collision with Animals"
					},
					"premiumForColl": "0.00",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Collision with Animals",
							"id": 1000208
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "0.00",
					"productLineType": 1,
					"productLineGroup": 1000232,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "0.00",
					"excessAmount": "4132.04",
					"coverOptionName": "Serial Vandalism",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000212,
						"desc": "Serial Vandalism"
					},
					"premiumForColl": "0.00",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Serial Vandalism",
							"id": 1000212
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "0.00",
					"productLineType": 1,
					"productLineGroup": 1000297,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "0.00",
					"excessAmount": "0.00",
					"coverOptionName": "Front Screen Repair",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000280,
						"desc": "Front Screen Repair"
					},
					"premiumForColl": "0.00",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Front Screen Repair",
							"id": 1000280
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "0.00",
					"productLineType": 1,
					"productLineGroup": 1000298,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "0.00",
					"excessAmount": "4132.04",
					"coverOptionName": "Front Screen Replacement",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000281,
						"desc": "Front Screen Replacement"
					},
					"premiumForColl": "0.00",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Front Screen Replacement",
							"id": 1000281
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				},
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "0.00",
					"productLineType": 1,
					"productLineGroup": 1000299,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "0.00",
					"excessAmount": "4132.04",
					"coverOptionName": "Other Glass Damage",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000282,
						"desc": "Other Glass Damage"
					},
					"premiumForColl": "0.00",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "Other Glass Damage",
							"id": 1000282
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				}
			]
		}
	],
	"policyNumber": "0010000021879/00",
	"channel": {
		"id": 100,
		"desc": "Company Employee Channel"
	},
	"commissionForColl": "0.00",
	"totalYearlyPremium": "12519.00",
	"loadingForColl": "0.00",
	"quoteValidUntil": "2020-04-17T00:00:00",
	"endorsStartDate": "2020-04-01T00:00:00",
	"statusReason": {
		"id": 1000004,
		"desc": "Create new proposal"
	},
	"commissionYearlyAmount": "0.00",
	"netYearlyPremium": "12507.00",
	"currency": {
		"id": 1000001,
		"desc": "Danish Krone"
	},
	"policyHolderExternalNumber": "21216",
	"premiumForColl": "13507.20",
	"endorsementNumber": 0,
	"collectionMethod": {
		"id": 1000000,
		"desc": "Bank Transfer - Collection"
	},
	"product": {
		"id": 1000018,
		"desc": "Motor"
	},
	"netPremiumForColl": "13494.24",
	"brandCompanyExternalNumber": "1010",
	"taxForColl": "12.96",
	"consents": [],
	"loadingYearlyPremium": "0.00",
	"cacheObjectReference": 0,
	"paymentTerm": {
		"id": 1000061,
		"desc": "1000061"
	},
	"startDate": "2020-04-01T00:00:00",
	"taxYearlyPremium": "12.00",
	"status": {
		"id": 10,
		"desc": "Proposal"
	}
};
const temp = {
	"insuranceAmount": "0.00",
	"cost": "0.00",
	"netPremiumForColl": "2166.54",
	"productLineType": 1,
	"productLineGroup": 1000220,
	"commissionForColl": "0.00",
	"excessOptions": [],
	"taxForColl": "2.16",
	"excessAmount": "0.00",
	"coverOptionName": "MTPL",
	"loadingForColl": "0.00",
	"productLineOptionType": {
		"id": 1000200,
		"desc": "MTPL"
	},
	"premiumForColl": "2168.70",
	"coverOptions": [
		{
			"optionNumber": 10,
			"description": "MTPL",
			"id": 1000200,
			"cost": 10
		}
	],
	"included": true,
	"insuranceAmountOptions": []
};
var temp2 = {
	"insuredObjects": [
		{
			"covers": [
				{
					"insuranceAmount": "0.00",
					"cost": "0.00",
					"netPremiumForColl": "2166.54",
					"productLineType": 1,
					"productLineGroup": 1000220,
					"commissionForColl": "0.00",
					"excessOptions": [],
					"taxForColl": "2.16",
					"excessAmount": "0.00",
					"coverOptionName": "MTPL",
					"loadingForColl": "0.00",
					"productLineOptionType": {
						"id": 1000200,
						"desc": "MTPL"
					},
					"premiumForColl": "2168.70",
					"coverOptions": [
						{
							"optionNumber": 10,
							"description": "MTPL",
							"id": 1000200
						}
					],
					"included": true,
					"insuranceAmountOptions": []
				}
			]
		}
	]
};

const listKeysToCleanOut = [ "insuranceAmount", "totalYearlyPremium", "taxYearlyPremium", "commissionYearlyAmount", "loadingYearlyPremium", "netYearlyPremium", "taxForColl", "excessAmount", "cost", "commissionForColl", "premiumForColl", "loadingForColl", "netPremiumForColl"];

function removeKeys(input) {
	listKeysToCleanOut.forEach(toRemove => {
		delete input[toRemove];
	});
	return input;
}

function findKey(input) {
	input = JSON.parse(JSON.stringify(input));
	
	if (Array.isArray(input)) {
		input = findInArray(input);
	} else if (typeof (input) == "object") {
		for (let e in input) {
			if (typeof (input[e]) == "object") {
				input[e] = findKey(input[e]);
			}
		}
	}
	input = removeKeys(input);
	return input;
}

function findInArray(input) {
	let store = [];
	if (input != []) {
		input.forEach(function(e) {
			store.push(findKey(e));
		});
	}
	return store;
}

console.log('Start');
console.log('index.js:925', JSON.stringify(findKey(inputJson, listKeysToCleanOut), false, 1));

