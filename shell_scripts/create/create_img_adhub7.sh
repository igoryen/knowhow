echo "Running create_img_adhub7.sh"



# $1 - model
# $2 - ordinal number of the 'year' dir
# $3 - year

# colors
# $4 - color 1 like "matador_red_mica"
# $5 - color 2
# $6
# $7
# $8
# $9
# $10 - color 7
# $11
cd ../LEXADHUB/8/898/ready/

mkdir model_$1_
mkdir model_$1_/year_$3_$2

# creating the 5 views
echo "Creating the 5 views with 7 colors in each"
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
	echo "color $4"

	mkdir model_$1_/year_$3_$2/view_front_1/color_$4/
	touch model_$1_/year_$3_$2/view_front_1/color_$4/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$4/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$4/i_$1_front_full.txt

	# color 2
	echo "color $5"

	mkdir model_$1_/year_$3_$2/view_front_1/color_$5/
	touch model_$1_/year_$3_$2/view_front_1/color_$5/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$5/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$5/i_$1_front_full.txt

	# color 3
	echo "color $6"

	mkdir model_$1_/year_$3_$2/view_front_1/color_$6/
	touch model_$1_/year_$3_$2/view_front_1/color_$6/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$6/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$6/i_$1_front_full.txt

	# color 4
	echo "color $7"

	mkdir model_$1_/year_$3_$2/view_front_1/color_$7/
	touch model_$1_/year_$3_$2/view_front_1/color_$7/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$7/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$7/i_$1_front_full.txt

	# color 5
	echo "color $8"

	mkdir model_$1_/year_$3_$2/view_front_1/color_$8/
	touch model_$1_/year_$3_$2/view_front_1/color_$8/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$8/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$8/i_$1_front_full.txt


	# # color 6
	echo "color $9"

	mkdir model_$1_/year_$3_$2/view_front_1/color_$9/
	touch model_$1_/year_$3_$2/view_front_1/color_$9/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$9/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_$9/i_$1_front_full.txt

	# # color 7
	echo "color ${10}"

	mkdir model_$1_/year_$3_$2/view_front_1/color_${10}/
	touch model_$1_/year_$3_$2/view_front_1/color_${10}/i_$1_front_big.txt
	touch model_$1_/year_$3_$2/view_front_1/color_${10}/i_$1_front_small.txt
	touch model_$1_/year_$3_$2/view_front_1/color_${10}/i_$1_front_full.txt

# LOOP 2

	mkdir model_$1_/year_$3_$2/view_front34_2/i_$1_front34_full/

	echo "color $4"
	mkdir model_$1_/year_$3_$2/view_front34_2/color_$4/
	touch model_$1_/year_$3_$2/view_front34_2/color_$4/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$4/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$4/i_$1_front34_full.txt
	echo "color $5"
	mkdir model_$1_/year_$3_$2/view_front34_2/color_$5/
	touch model_$1_/year_$3_$2/view_front34_2/color_$5/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$5/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$5/i_$1_front34_full.txt
	echo "color $6"
	mkdir model_$1_/year_$3_$2/view_front34_2/color_$6/
	touch model_$1_/year_$3_$2/view_front34_2/color_$6/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$6/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$6/i_$1_front34_full.txt
	echo "color $7"
	mkdir model_$1_/year_$3_$2/view_front34_2/color_$7/
	touch model_$1_/year_$3_$2/view_front34_2/color_$7/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$7/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$7/i_$1_front34_full.txt
	echo "color $8"
	mkdir model_$1_/year_$3_$2/view_front34_2/color_$8/
	touch model_$1_/year_$3_$2/view_front34_2/color_$8/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$8/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$8/i_$1_front34_full.txt

	# # color 6
	echo "color $9"
	mkdir model_$1_/year_$3_$2/view_front34_2/color_$9/
	touch model_$1_/year_$3_$2/view_front34_2/color_$9/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$9/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_$9/i_$1_front34_full.txt

	# # color 7
	echo "color ${10}"
	mkdir model_$1_/year_$3_$2/view_front34_2/color_${10}/
	touch model_$1_/year_$3_$2/view_front34_2/color_${10}/i_$1_front34_big.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_${10}/i_$1_front34_small.txt
	touch model_$1_/year_$3_$2/view_front34_2/color_${10}/i_$1_front34_full.txt


# LOOP 3 - profile

	mkdir model_$1_/year_$3_$2/view_profile_3/i_$1_profile_full/
	echo "color $4"
	mkdir model_$1_/year_$3_$2/view_profile_3/color_$4/
	touch model_$1_/year_$3_$2/view_profile_3/color_$4/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$4/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$4/i_$1_profile_full.txt
	echo "color $5"
	mkdir model_$1_/year_$3_$2/view_profile_3/color_$5/
	touch model_$1_/year_$3_$2/view_profile_3/color_$5/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$5/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$5/i_$1_profile_full.txt
	echo "color $6"
	mkdir model_$1_/year_$3_$2/view_profile_3/color_$6/
	touch model_$1_/year_$3_$2/view_profile_3/color_$6/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$6/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$6/i_$1_profile_full.txt
	echo "color $7"
	mkdir model_$1_/year_$3_$2/view_profile_3/color_$7/
	touch model_$1_/year_$3_$2/view_profile_3/color_$7/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$7/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$7/i_$1_profile_full.txt
	echo "color $8"
	mkdir model_$1_/year_$3_$2/view_profile_3/color_$8/
	touch model_$1_/year_$3_$2/view_profile_3/color_$8/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$8/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$8/i_$1_profile_full.txt

	# # color 6
	echo "color $9"
	mkdir model_$1_/year_$3_$2/view_profile_3/color_$9/
	touch model_$1_/year_$3_$2/view_profile_3/color_$9/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$9/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_$9/i_$1_profile_full.txt

	# # color 7
	echo "color ${10}"
	mkdir model_$1_/year_$3_$2/view_profile_3/color_${10}/
	touch model_$1_/year_$3_$2/view_profile_3/color_${10}/i_$1_profile_big.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_${10}/i_$1_profile_small.txt
	touch model_$1_/year_$3_$2/view_profile_3/color_${10}/i_$1_profile_full.txt


# LOOP 4 - rear


	mkdir model_$1_/year_$3_$2/view_rear_4/i_$1_rear_full/
	echo "color $4"
	mkdir model_$1_/year_$3_$2/view_rear_4/color_$4/
	touch model_$1_/year_$3_$2/view_rear_4/color_$4/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$4/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$4/i_$1_rear_full.txt
	echo "color $5"
	mkdir model_$1_/year_$3_$2/view_rear_4/color_$5/
	touch model_$1_/year_$3_$2/view_rear_4/color_$5/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$5/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$5/i_$1_rear_full.txt
	echo "color $6"
	mkdir model_$1_/year_$3_$2/view_rear_4/color_$6/
	touch model_$1_/year_$3_$2/view_rear_4/color_$6/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$6/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$6/i_$1_rear_full.txt
	echo "color $7"
	mkdir model_$1_/year_$3_$2/view_rear_4/color_$7/
	touch model_$1_/year_$3_$2/view_rear_4/color_$7/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$7/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$7/i_$1_rear_full.txt
	echo "color $8"
	mkdir model_$1_/year_$3_$2/view_rear_4/color_$8/
	touch model_$1_/year_$3_$2/view_rear_4/color_$8/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$8/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$8/i_$1_rear_full.txt

	# # color 6
	echo "color $9"
	mkdir model_$1_/year_$3_$2/view_rear_4/color_$9/
	touch model_$1_/year_$3_$2/view_rear_4/color_$9/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$9/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_$9/i_$1_rear_full.txt

	# # color 7
	echo "color ${10}"
	mkdir model_$1_/year_$3_$2/view_rear_4/color_${10}/
	touch model_$1_/year_$3_$2/view_rear_4/color_${10}/i_$1_rear_big.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_${10}/i_$1_rear_small.txt
	touch model_$1_/year_$3_$2/view_rear_4/color_${10}/i_$1_rear_full.txt


# LOOP 5 - rear34

	mkdir model_$1_/year_$3_$2/view_rear34_5/i_$1_rear34_full/
	echo "color $4"
	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$4/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$4/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$4/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$4/i_$1_rear34_full.txt
	echo "color $5"
	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$5/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$5/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$5/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$5/i_$1_rear34_full.txt
	echo "color $6"
	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$6/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$6/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$6/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$6/i_$1_rear34_full.txt
	echo "color $7"
	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$7/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$7/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$7/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$7/i_$1_rear34_full.txt
	echo "color $8"
	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$8/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$8/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$8/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$8/i_$1_rear34_full.txt
	echo "color ${9}"
	# # color 6

	mkdir model_$1_/year_$3_$2/view_rear34_5/color_$9/
	touch model_$1_/year_$3_$2/view_rear34_5/color_$9/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$9/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_$9/i_$1_rear34_full.txt

	# # color 7
	echo "color ${10}"

	mkdir model_$1_/year_$3_$2/view_rear34_5/color_${10}/
	touch model_$1_/year_$3_$2/view_rear34_5/color_${10}/i_$1_rear34_big.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_${10}/i_$1_rear34_small.txt
	touch model_$1_/year_$3_$2/view_rear34_5/color_${10}/i_$1_rear34_full.txt


echo "Done"