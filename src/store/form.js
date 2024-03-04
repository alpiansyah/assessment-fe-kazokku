const state = {
  step: localStorage.getItem('step') ? parseInt(localStorage.getItem('step')) : 1,
  client_form: {
    email: null,
    dropship_name: null,
    dropship_number: null,
    phone_number: null,
    address: null,
    as_dropshipper: null,
  },
  validation: null,
  selected_items: localStorage.getItem('state_selected') ? JSON.parse(localStorage.getItem('state_selected')) : 
   {
    purchased_item: {
      total_cost: 500000,
      total_item: 10,
    },
    payment: {
      id: null,
      payment_name: "",
      balance: "",
    },
    shipment: {
      id: null,
      estimation: "",
      shipment_name: "",
      cost: 0,
    },
    order_id: null,
    dropshipper: {
      fee: 5900,
    },
  },
};

const mutations = {
  reset_state: function (state) {
    state.step = 1;
    state.client_form = {
      email: null,
      dropship_name: null,
      dropship_number: null,
      phone_number: null,
      address: null,
      as_dropshipper: null
    };
    state.validation = null
    state.selected_items = {
        purchased_item: {
          total_cost: 500000,
          total_item: 10,
        },
        payment: {
          id: null,
          payment_name: "",
          balance: "",
        },
        shipment: {
          id: null,
          estimation: "",
          shipment_name: "",
          cost: 0,
        },
        order_id: null,
        dropshipper: {
          fee: 5900,
        }
      };
  },
  clientForm: function (state, payload) {
    state.client_form = payload.client_form;
  },
  selectedPayment: function (state, payload) {
    state.selected_services.payment = payload;
  },
  selectedShipment: function (state, payload) {
    state.selected_services.shipment = payload;
  },
  form_email: function (state, payload) {
    state.client_form.email = payload;
  },
  form_phonenumber: function (state, payload) {
    state.client_form.phone_number = payload;
  },
  form_dropshippernumber: function (state, payload) {
    state.client_form.dropship_number = payload;
  },
  form_dropshippername: function (state, payload) {
    state.client_form.dropship_name = payload;
  },
  form_address: function (state, payload) {
    state.client_form.address = payload;
  },
  form_asdropshipper: function (state, payload) {
    state.client_form.as_dropshipper = payload;
  },
  set_validation: function (state, payload) {
    state.validation = payload;
  },
  initialise_form: function (state, payload) {
    state.client_form = payload;
  },
  initialise_selected: function (state, payload) {
    state.selected_items = payload;
  },
  initialise_step: function (state, payload) {
    state.step = payload;
  },
  set_payment_selected: function (state, payload) {
    state.selected_items.payment = payload;
  },
  set_shipment_selected: function (state, payload) {
    state.selected_items.shipment = payload;
  },
  set_order_id: function (state, payload) {
    console.log(payload);
    state.selected_items.order_id = payload;
  },
};

export default { state, mutations };
