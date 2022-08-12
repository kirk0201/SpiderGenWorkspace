
/**
Constructor
Do not call Function in Constructor.
*/
class SlideView()
{
	super();

	//TODO:edit here

}
extends AView;


function SlideView*init(context, evtListener)
{
	super.init(context, evtListener);

	//TODO:edit here

};

function SlideView*onInitDone()
{
	super.onInitDone();
	// 화살표를 absolute를 사용하지 않고, 위치를 정렬시키기 위해 Flex를 이용하여 구현
	// Slide도 TabView와 마찬가지로 View로 사용할 폴더를 작성하고 addItem()함수를 이용하여 뷰를 설정함
	// slideTo(index)함수를 이용하여 버튼 클릭을 통해 다른 슬라이드로 접근 가능하다 index는 0부터 시작한다
	// slidePrev(), slideNext() 함수로 편하게 앞 뒤 이동 가능
	// 아래 index 값을 [1]부터 시작하였지만, 적용 안되는 것으로 보임
	this.slide.addItem('Source/ContainerViews/MainSectionView/SlideView/Views/SubSlideView1.lay', [1]);
	this.slide.addItem('Source/ContainerViews/MainSectionView/SlideView/Views/SubSlideView2.lay', [2]);
	this.slide.addItem('Source/ContainerViews/MainSectionView/SlideView/Views/SubSlideView3.lay', [3]);

	//TODO:edit here

};

function SlideView*onActiveDone(isFirst)
{
	super.onActiveDone(isFirst);

	//TODO:edit here

};

function SlideView*onPrevBtnClick(comp, info, e)
{
	this.slide.slidePrev()
	//TODO:edit here

};

function SlideView*onNextBtnClick(comp, info, e)
{
	this.slide.slideNext()
	//TODO:edit here

};
