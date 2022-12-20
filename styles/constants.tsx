enum Responsive {
  mobile = "750px",
}
enum ScreenWidth {
  mobile = 750,
}

const Device = {
  mobile: `(max-width: ${Responsive.mobile})`,
};

const constants = { Responsive, Device, ScreenWidth };
export default constants;

