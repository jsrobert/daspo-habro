type fontSize = {
    minHeight: string,
    minWidth: string,
    fontSize: string,
    loader: number,
}

export class FontManager {
  static getFontSize = (size: string): fontSize => {
    switch (size) {
        case "xs":
            return {
                minHeight: "30px",
                minWidth: "100px",
                fontSize: "0.7rem",
                loader: 20
            };
        case "sm":
            return {
                minHeight: "35px",
                minWidth: "110px",
                fontSize: "0.8rem",
                loader: 25
            };
        case "lg":
            return {
                minHeight: "45px",
                minWidth: "140px",
                fontSize: "1.0rem;",
                loader: 35
            };
        case "xl":
            return {
                minHeight: "50px",
                minWidth: "150px",
                fontSize: "1.1rem;",
                loader: 40
            };
        default: // medium
            return {
                minHeight: "40px",
                minWidth: "130px",
                fontSize: "0.9rem",
                loader: 30
            };
    }
  }
};
