import { Button, Image } from "@components/ui";

const CartCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col h-[90px] items-center justify-start w-[90px]">
          <Image
            className="h-[90px] md:h-auto object-cover w-[90px]"
            alt="imageFiftySix"
            src={props?.productimage}
          />
        </div>
        <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
            <div className="leading-[24.00px] max-w-[193px] md:max-w-full text-base text-black-900">
              {props?.producttitle}
            </div>
            <div
              className="text-black-900 text-sm w-full"
            >
              {props?.productcode}
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center justify-end w-auto">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Image
                className="h-6 w-6"
                src="images/img_arrowdown_black_900_24x24.svg"
                alt="arrowdown"
              />
              <Button
              
                className="!text-black-900 cursor-pointer font-medium font-sfprodisplay min-w-[40px] rounded text-base text-center"
                variant="outline"
              >
                {props?.buttonlabel}
              </Button>
              <Image className="h-6 w-6" src="images/img_plus.svg" alt="plus" />
            </div>
            <div
              className="text-black-900 text-xl tracking-[0.60px] w-auto"
              size="txtSFProDisplayMedium20"
            >
              {props?.productprice}
            </div>
            <Image className="h-6 w-6" src="images/img_close.svg" alt="close" />
          </div>
        </div>
      </div>
    </>
  );
};

CartCard.defaultProps = {
  productimage: "images/img_iphone14pro1_10.png",
  producttitle: "Apple iPhone 14 Pro Max 128Gb Deep Purple",
  productcode: "#25139526913984",
  buttonlabel: "1",
  productprice: "$1399  ",
};

export default CartCard;
