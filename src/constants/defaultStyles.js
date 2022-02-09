import { StyleSheet } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 10,
    // alignItems: 'center',
    // justifyContent: 'flex-start'
    backgroundColor: Colors.accent
  },
  bodyText: {
    //fontFamily: 'open-sans',
    color: 'black',
    fontSize: 20,
    fontFamily: 'open-sans'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'open-sans-bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'normal',
    fontFamily: 'open-sans'
  },
  heading2: {
      fontSize: 22,
      marginTop: 10,
      marginBottom: 10,
      fontWeight: 'bold',
      fontFamily: 'open-sans-bold',
  },
  errorText: {
    textAlign: 'center',
    color: Colors.error,
    marginBottom: 10
  },

  modal: {
    height: 50,
    width: 200,
    marginBottom: 10
  },
  modalField: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: 5,
    fontSize: 18,
    fontFamily: 'open-sans',    
    //backgroundColor: Colors.primary,
    backgroundColor: Colors.modalColor,
    color: Colors.buttonText,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  modalFieldText: {
    //backgroundColor: Colors.primary,
    color: Colors.buttonText,
    fontSize: 18,
    fontFamily: 'open-sans',
    justifyContent: 'center'
  },
  modalDropdownText: {
    //backgroundColor: Colors.secondary,
    backgroundColor: Colors.modalDropdownColor,
    color: Colors.dropdownText,
    fontSize: 18,
    fontFamily: 'open-sans',
  },
  modalDropdownHighlight: {
      //backgroundColor: Colors.primary,
      color: Colors.buttonText
  },
  labelAndModalContainer: {
      // height: 90,
      width: '100%',
      // flexDirection: 'row',
      justifyContent: 'space-around',
      // marginVertical: 10,
      // alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop:0,
    marginVertical: 10,
    marginRight: 5,
    // backgroundColor: Colors.accent
  },

  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 30,
    marginVertical: 10,
    marginHorizontal: 10
  },
  buttonText: {
    color: Colors.buttonText,
    //fontFamily: 'open-sans',
    fontSize: 20,
    fontFamily: 'open-sans',
    textAlign: 'center'
  },
  searchBarOuterContainer: {
    marginBottom: 20
  },
  searchBarContainer: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: Colors.accent2,
    //borderColor: Colors.primary,
    borderColor: Colors.inputBorderColor,
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    // marginHorizontal: 15,
    flexDirection: 'row'
  },
  searchBarText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'open-sans',
  },
  searchBarIcon: {
    fontSize: 35,
    fontFamily: 'open-sans',
    alignSelf: 'center',
    marginHorizontal: 15
  },
  searchCategoryContainer: {
    marginVertical: 10
  },
  input: {
    height: 40,
    //borderColor: Colors.primary,
    borderColor: Colors.inputBorderColor,
    borderWidth: 1,
    marginBottom: 10,
    // fontSize: 18,
    backgroundColor: Colors.accent2,
    borderRadius: 5,
    // marginHorizontal: 15,
    flexDirection: 'row'
  },
  inputText: {
    fontSize: 18,
    fontFamily: 'open-sans',
  },
  multiLineInput: {
    height: 100,
    textAlignVertical: 'top'
  },
  priceInput: {
    width: '40%'
  },
  imageFlatListContainer: {
    height: 185
  },  
  card: {
    height: 165,
    width: 175,
    marginHorizontal: 10,
    marginVertical: 10,

    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: Colors.primary    
  },
  touchableCard: {
    borderRadius: 10,
    overflow: 'hidden'
  },   
  imageInCardContainer: {
    width: '100%',
    height: '60%',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageInCard: {
    height: '100%',
    width: '100%'
  },
  detailsInCardContainer: {
    alignItems: 'center',
    height: '40%',
    padding: 5
  },
  nameInDetailsOfCard: {
    // fontFamily: 'open-sans-bold',
    fontSize: 18,
    fontFamily: 'open-sans',
    // color: Colors.accent,
    marginVertical: 2
  },
  priceInDetailsOfCard: {
    // fontFamily: 'open-sans',
    fontSize: 14,
    fontFamily: 'open-sans',
    color: '#888'
  },
  myItemCard: {
    marginTop:30,
    height: 255,
    width:250,
    marginLeft:33
   
  }, 
  messageCard: {
    width:'95%', 
    height:'auto',
  },
  messageViewInCardContainer: {
    flexDirection: 'row',
  },
  messageImageInCard: {
    width: '40%',
    height: '100%',
    borderRadius: 10
  },
  messageDetailsInCardContainer: {
    // alignItems: 'center',
    height: 'auto',
    padding: 5
  },
  messageItemNameInDetailsOfCard: {
    fontSize: 16,
    fontFamily: 'open-sans',
  },
  messageBuyerInDetailsOfCard: {
    fontSize: 16,
    fontFamily: 'open-sans',
  },
  messageSellerInDetailsOfCard: {
    fontSize: 16,
    fontFamily: 'open-sans',
  },
  messageDetailCardMe: {
    marginLeft: 0,
    width: '90%',
    backgroundColor: Colors.accent,
    padding: 10,
    height: 'auto'
  },
  messageDetailCardThem: {
    marginLeft: 30,
    width: '90%',
    backgroundColor: Colors.accent2,
    padding: 10,
    height: 'auto'
  },
  messageDetailCard: {
    width: '95%',
    backgroundColor: Colors.accent2,
    padding: 10,
    height: 'auto'
  },
  messageDetailItemNameInDetailsOfCard: {
    fontSize: 16,
    fontFamily: 'open-sans',
  },
  messageDetailBuyerInDetailsOfCard: {
    fontSize: 16,
    fontFamily: 'open-sans',
  },
  messageDetailSellerInDetailsOfCard: {
    fontSize: 16,
    fontFamily: 'open-sans',
  },
  messageDetailItemAndDeleteButtonInCardContainer: {
    flexDirection: 'row',
  },
  messageDetailDeleteButtonInCard: {
    marginLeft: '60%'
  },
  messageDetailMessage: {
    fontSize: 20,
    fontFamily: 'open-sans',
  },
  messageDetailDateTimeInCardContainer: {
    flexDirection: 'row'
  },
  messageDetailDateInCardContainer: {
    flexDirection: 'row'
  },
  messageDetailTimeInCardContainer: {
    flexDirection: 'row'
  },
  messageDetailDateInCard: {
    fontSize: 16
  },
  messageDetailTimeInCard: {
    fontSize: 16
  },
  messageDetailMessageInCard: {
    fontSize: 16
  },
  messageInputContainer: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: Colors.accent2,
    borderColor: Colors.primary,
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    // marginHorizontal: 15,
    flexDirection: 'row'
  },
  multiLineFeatherInput: {
    textAlignVertical: 'top',
    // height: 70,
    width: '85%',
    fontSize: 18 ,
    fontFamily: 'open-sans',
  },
  sendMessageIcon : {
    marginTop: 12,
  },
  radioButtonGroupContainer: {
    margin: 10
  },
  radioButtonItemContainer: {
    marginHorizontal: 40
  },
  radioButtonItemLabel: {
    fontSize: 16,
    fontFamily: 'open-sans',
  },
  addItemIcon: {
    width:50,
    marginLeft:300
  },
  itemDetails: {
    marginLeft: 10,
    fontSize: 20,
    fontFamily: 'open-sans',
    color: 'black'
  },
  itemDetailDateTimeContainer: {
    flexDirection: 'row',
    marginLeft: 10
  },
  itemDetailDateContainer: {
    flexDirection: 'row'
  },
  itemDetailTimeContainer: {
    flexDirection: 'row'
  },
  itemDetailDate: {
    fontSize: 20,
    fontFamily: 'open-sans',
  },
  itemDetailTime: {
    fontSize: 20,
    fontFamily: 'open-sans',
  },
  activityIndicator: {
    justifyContent: 'center'
  },
  rowContainer: {
    flexDirection: 'row'
  },
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerStyle: {
    //backgroundColor: Colors.defaultButtonColor,
    backgroundColor: Colors.primary
  },
  headerTitleStyle: {
    alignSelf: 'center',
    fontSize: 22,
    fontFamily: 'open-sans-bold',
    color: Colors.headerText
  },
  hamburgerMenu: {
    marginRight: 15, 
    color: Colors.hamburgerMenu    
  },
  logo: {
    marginLeft: 10, 
    width: 50, 
    height: 50    
  }
  });
