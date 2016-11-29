echo "Running create_img_adhub5.sh"



# $1 - model
# $2 - ordinal number of the 'year' dir
# $3 - year

# colors
# $4 - color 1 like "matador_red_mica"
# $5
# $6
# $7
# $8
# $9
# $10
# $11

# USE:
# how to run the script and its arguments:
# ./create_img_adhub5.sh is-350-awd 8 2017 nebula_grey_pearl atomic_silver nightfall_mica eminent_white_pearl caviar
# ./create_img_adhub5.sh is-300-awd 4 2017-f-sport atomic_silver nebula_grey_pearl obsidian redline ultra_white ultrasonic_blue_mica_v2
# ./create_img_adhub5.sh is-200t 4 2017 nebula_grey_pearl atomic_silver nightfall_mica eminent_white_pearl caviar
# ./create_img_adhub5.sh is-200t 4 2017 atomic_silver caviar eminent_white_pearl nebula_grey_pearl nightfall_mica
# ./studio_img_adhub gs-350-awd 4 2016 autumn_shimmer caviar eminent_white_pearl matador_red_mica nebula_grey_pearl nightfall_mica satin_cashmere_metallic silver_lining_metallic 


ACCBASE=~/Documents/ig/_mine/LEXADHUB/14/1429/test/;


cd $ACCBASE

mkdir model_$1_
mkdir model_$1_/year_$3_$2

echo "Creating the 5 views with ... colors in each"
# view

mkdir model_$1_/year_$3_$2/view_front_1
mkdir model_$1_/year_$3_$2/view_front34_2
mkdir model_$1_/year_$3_$2/view_profile_3
mkdir model_$1_/year_$3_$2/view_rear_4
mkdir model_$1_/year_$3_$2/view_rear34_5


# LOOP 1
	
	echo "Creating /view_front_1/"

	mkdir model_$1_/year_$3_$2/view_front_1/i_$1_front_full/

	# color 1

	mkdir model_$1_/year_$3_$2/view_front_1/color_$4/
	touch model_$1_/year_$3_$2/view_front_1/color_$4/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$4/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$4/i_$1_front_full.txt

	# color 2

	mkdir model_$1_/year_$3_$2/view_front_1/color_$5/
	touch model_$1_/year_$3_$2/view_front_1/color_$5/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$5/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$5/i_$1_front_full.txt

	# color 3

	mkdir model_$1_/year_$3_$2/view_front_1/color_$6/
	touch model_$1_/year_$3_$2/view_front_1/color_$6/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$6/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$6/i_$1_front_full.txt

	# color 4

	mkdir model_$1_/year_$3_$2/view_front_1/color_$7/
	touch model_$1_/year_$3_$2/view_front_1/color_$7/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$7/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$7/i_$1_front_full.txt

	# color 5

	mkdir model_$1_/year_$3_$2/view_front_1/color_$8/
	touch model_$1_/year_$3_$2/view_front_1/color_$8/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$8/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$8/i_$1_front_full.txt


# LOOP 2

	echo "Creating view_front34_2"

	mkdir model_$1_/year_$3_$2/view_front34_2/i_$1_front34_full/

	# color 1

	mkdir model_$1_/year_$3_$2/view_front34_2/color_$4/
	touch model_$1_/year_$3_$2/view_front34_2/color_$4/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$4/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$4/i_$1_front34_full.txt

	# color 2

	mkdir model_$1_/year_$3_$2/view_front34_2/color_$5/
	touch model_$1_/year_$3_$2/view_front34_2/color_$5/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$5/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$5/i_$1_front34_full.txt
	
	# color 3

	mkdir model_$1_/year_$3_$2/view_front34_2/color_$6/
	touch model_$1_/year_$3_$2/view_front34_2/color_$6/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$6/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$6/i_$1_front34_full.txt
	
	# color 4

	mkdir model_$1_/year_$3_$2/view_front34_2/color_$7/
	touch model_$1_/year_$3_$2/view_front34_2/color_$7/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$7/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$7/i_$1_front34_full.txt
	
	# color 5

	mkdir model_$1_/year_$3_$2/view_front34_2/color_$8/
	touch model_$1_/year_$3_$2/view_front34_2/color_$8/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$8/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$8/i_$1_front34_full.txt


# LOOP 3 - profile

	echo "Creating view_profile_3"

	mkdir model_$1_/year_$3_$2/view_profile_3/i_$1_profile_full/

	# color 1

	mkdir model_$1_/year_$3_$2/view_profile_3/color_$4/
	touch model_$1_/year_$3_$2/view_profile_3/color_$4/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$4/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$4/i_$1_profile_full.txt

	# color 2

	mkdir model_$1_/year_$3_$2/view_profile_3/color_$5/
	touch model_$1_/year_$3_$2/view_profile_3/color_$5/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$5/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$5/i_$1_profile_full.txt

	# color 3

	mkdir model_$1_/year_$3_$2/view_profile_3/color_$6/
	touch model_$1_/year_$3_$2/view_profile_3/color_$6/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$6/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$6/i_$1_profile_full.txt

	# color 4

	mkdir model_$1_/year_$3_$2/view_profile_3/color_$7/
	touch model_$1_/year_$3_$2/view_profile_3/color_$7/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$7/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$7/i_$1_profile_full.txt

	# color 5

	mkdir model_$1_/year_$3_$2/view_profile_3/color_$8/
	touch model_$1_/year_$3_$2/view_profile_3/color_$8/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$8/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$8/i_$1_profile_full.txt

	
# LOOP 4 - rear

	echo "Creating view_rear_4"

	mkdir model_$1_/year_$3_$2/view_rear_4/i_$1_rear_full/

	mkdir model_$1_/year_$3_$2/view_rear_4/color_$4/
	touch model_$1_/year_$3_$2/view_rear_4/color_$4/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$4/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$4/i_$1_rear_full.txt

	mkdir model_$1_/year_$3_$2/view_rear_4/color_$5/
	touch model_$1_/year_$3_$2/view_rear_4/color_$5/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$5/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$5/i_$1_rear_full.txt

	mkdir model_$1_/year_$3_$2/view_rear_4/color_$6/
	touch model_$1_/year_$3_$2/view_rear_4/color_$6/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$6/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$6/i_$1_rear_full.txt

	mkdir model_$1_/year_$3_$2/view_rear_4/color_$7/
	touch model_$1_/year_$3_$2/view_rear_4/color_$7/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$7/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$7/i_$1_rear_full.txt

	mkdir model_$1_/year_$3_$2/view_rear_4/color_$8/
	touch model_$1_/year_$3_$2/view_rear_4/color_$8/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$8/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$8/i_$1_rear_full.txt

	

# LOOP 5 - rear34

	echo "Creating view_rear34_5"

	mkdir model_$1_/year_$3_$2/view_rear34_5/i_$1_rear34_full/

	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$4/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$4/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$4/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$4/i_$1_rear34_full.txt

	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$5/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$5/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$5/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$5/i_$1_rear34_full.txt

	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$6/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$6/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$6/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$6/i_$1_rear34_full.txt

	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$7/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$7/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$7/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$7/i_$1_rear34_full.txt

	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$8/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$8/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$8/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$8/i_$1_rear34_full.txt



echo "Done"