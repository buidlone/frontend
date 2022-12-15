enum Responsive {
  mobile = "450px",
}
enum ScreenWidth {
  mobile = 450,
}

const Device = {
  mobile: `(max-width: ${Responsive.mobile})`,
};

const constants = { Responsive, Device, ScreenWidth };
export default constants;

