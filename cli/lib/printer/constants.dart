// ignore_for_file: constant_identifier_names

// Control characters
const ESC = 0x1B;
const GS = 0x1D;

// Feed control sequences
const CTL_LF = 0x0A; // Print and line feed
const CTL_FF = 0x0C; // Form feed
const CTL_CR = 0x0D; // Carriage return
const CTL_HT = 0x09; // Horizontal tab
const CTL_SET_HT = [ESC, 0x44]; // Set horizontal tab positions
const CTL_VT = 0x0B; // Vertical tab

// Printer hardware
const HW_INIT = [ESC, 0x40]; // Clear data in buffer and reset modes
const HW_SELECT = [ESC, 0x3D, 0x01]; // Printer select

const HW_RESET = [ESC, 0x3F, 0x0A, 0x00]; // Reset printer hardware

// Paper cutter
const PAPER_FULL_CUT = [GS, 0x56, 0x00]; // Full cut
const PAPER_PARTIAL_CUT = [GS, 0x56, 0x01]; // Partial cut

// Panel buttons (e.g. the FEED button)
const PANEL_BUTTONS_OFF = [ESC, 0x63, 0x35, 0x01]; // Disable all panel buttons
const PANEL_BUTTONS_ON = [ESC, 0x63, 0x35, 0x00]; // Enable all panel buttons

// Emphasize mode
const EMPHASIZE_MODE_OFF = [ESC, 0x45, 0]; // Bold font off
const EMPHASIZE_MODE_ON = [ESC, 0x45, 1]; // Bold font on

// Underline mode
const UNDERLINE_MODE_OFF = [ESC, 0x2D, 0]; // Underline font off
const UNDERLINE_MODE_1_DOT = [ESC, 0x2D, 1]; // Underline font 1-dot on
const UNDERLINE_MODE_2_DOT = [ESC, 0x2D, 2]; // Underline font 2-dots on

// Text size
// We need to include the TXT_NORMAL before every change
// to alternative formats. This is to reset the text.
const TXT_NORMAL = [ESC, 0x21, 0x00]; // Normal text
const TXT_2H = [...TXT_NORMAL, ESC, 0x21, 0x10]; // Double height text
const TXT_2W = [...TXT_NORMAL, ESC, 0x21, 0x20]; // Double width text
const TXT_2X = [...TXT_NORMAL, ESC, 0x21, 0x30]; // Double height and width text

// Font
const FONT_A = [ESC, 0x4D, 0x00]; // Font type A
const FONT_B = [ESC, 0x4D, 0x01]; // Font type B

// Alignment
const ALIGN_LEFT = [ESC, 0x61, 0x00]; // Justify left
const ALIGN_CENTER = [ESC, 0x61, 0x01]; // Justify center
const ALIGN_RIGHT = [ESC, 0x61, 0x02]; // Justify right

// Inversion
const INVERT_OFF = [ESC, 0x42, 0x00]; // Inverse printing off
const INVERT_ON = [ESC, 0x42, 0x01]; // Inverse printing on

// Color
const COLOR_BLACK = [ESC, 0x72, 0x00]; // Default color
const COLOR_ALTERNATIVE = [ESC, 0x72, 0x01]; // Alternative color

// Flip
const FLIP_OFF = [ESC, 0x7B, 0x00]; // Flip off
const FLIP_ON = [ESC, 0x7B, 0x01]; // Flip on

// Print density
const PRINT_DENSITY_MINUS_50 = [ESC, 0x7C, 0x00]; // Printing density -50%
const PRINT_DENSITY_MINUS_37_5 = [ESC, 0x7C, 0x01]; // Printing density -37.5%
const PRINT_DENSITY_MINUS_25 = [ESC, 0x7C, 0x02]; // Printing density -25%
const PRINT_DENSITY_MINUS_12_5 = [ESC, 0x7C, 0x03]; // Printing density -12.5%
const PRINT_DENSITY_0 = [ESC, 0x7C, 0x04]; // Printing density 0%
const PRINT_DENSITY_PLUS_12_5 = [ESC, 0x7C, 0x05]; // Printing density +12.5%
const PRINT_DENSITY_PLUS_25 = [ESC, 0x7C, 0x06]; // Printing density +25%
const PRINT_DENSITY_PLUS_37_5 = [ESC, 0x7C, 0x07]; // Printing density +37.5%
const PRINT_DENSITY_PLUS_50 = [ESC, 0x7C, 0x08]; // Printing density +50%

// Smooth
const SMOOTH_OFF = [ESC, 0x62, 0x00]; // Smooth off
const SMOOTH_ON = [ESC, 0x62, 0x01]; // Smooth on

// Line spacing
const LINESPACING_RESET = [ESC, 0x02]; // Reset linespacing
const LINESPACING_60 = [
  ESC,
  0x0A
]; // Line spacing, 60 of an inch, 0 <= line spacing <= 85
const LINESPACING_180 = [
  ESC,
  0x03
]; // Line spacing, 180 of an inch, 0 <= line spacing <= 255
const LINESPACING_360 = [
  ESC,
  0x2B
]; // Line spacing, 360 of an inch, 0 <= line spacing <= 255
